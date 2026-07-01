const {User,Accounts} = require("../db/connectDB");
const mongoose = require("mongoose");

const getBalance = async(req,res)=>{
    const userID = req.userId;
    try {
        const data = await Accounts.findOne({userId:userID});
        res.status(200).json({balance:data.balance});
    } catch (error) {
        res.status(500).json({message:"Something went wrong. Try again!"})
    }
}

const transfer = async (req, res) => {
    const toAccount = req.body.to;
    const fromAccount = req.userId;
    const amount = req.body.amount;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Validate recipient exists
        const toAccUser = await User.findById(toAccount).session(session);
        if (!toAccUser) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        // Debit sender — also acts as balance check atomically
        const fromAcc = await Accounts.findOneAndUpdate(
            { userId: fromAccount, balance: { $gte: amount } }, // ✅ atomic check + debit
            { $inc: { balance: -amount } },
            { session, new: true }
        );

        if (!fromAcc) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient funds" });
        }

        // Credit recipient
        await Accounts.findOneAndUpdate(
            { userId: toAccount },
            { $inc: { balance: amount } },
            { session }
        );

        await session.commitTransaction();
        res.status(200).json({ message: "Transfer successful" });

    } catch (error) {
        await session.abortTransaction();
        console.log(error);
        res.status(500).json({ message: "Something went wrong. Try again!" });
    } finally {
        session.endSession();
    }
};

module.exports = {getBalance,transfer};