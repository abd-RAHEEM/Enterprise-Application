function fibonacci(n){
    if (n>0){
        if (n==1){
            return 0
        }
        if (n==2){
            return 1
        }
        if (n>2){
            return fibonacci(n-1)+fibonacci(n-2)
        }
    }

}
console.time()
console.log(fibonacci(40))
console.timeEnd()
const fibIterative=(n)=>{
    if (n<=1) return n;
    let a=0,b=1,temp;
    for(let i=2;i<=n;i++){
        temp=a+b;
        a=b;
        b=a;
    }
    return b;
}
console.time()
console.log((fibIterative(40)))
console.timeEnd()