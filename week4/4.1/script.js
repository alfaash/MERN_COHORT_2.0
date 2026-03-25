function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const sum = Number(num1) + Number(num2);
    const ans = document.getElementById("ans");
    ans.innerText = `Answer: ${sum}`;
}