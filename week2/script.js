// Maps and Filters

//Given an array input return an array in which every value is multiplied by 2 
const input = [1,2,3,4,5];
let output = input.map((a)=>{
    return a*2;
});
console.log(output);


// Given an input array give me all the even value from it
output = input.filter((i)=>{
    return (i%2==0);
})
console.log(output);