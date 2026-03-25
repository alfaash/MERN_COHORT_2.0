console.log("Hi!");
setTimeout(()=>{
    console.log("5");
}, 5000);
setTimeout(()=>{
    console.log("4");
}, 4000);
setTimeout(()=>{
    console.log("3");
}, 3000);
setTimeout(()=>{
    console.log("2");
}, 2000);
setTimeout(()=>{
    console.log("1");
}, 1000);

let ans = 0;
for(let i=0;i<10000000000;i++){
    ans+=i;
}
console.log("Finish")