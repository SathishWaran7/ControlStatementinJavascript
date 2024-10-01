let m = prompt("Enter the first number: ");
let n = prompt("Enter the second number: ");
let ans = 0;
if(m>n){
    "Cannot perform the operation";
}
else{
    for(let i=m; i<=n; i++){
        ans += (i*i*i);
    }
}
console.log(ans);