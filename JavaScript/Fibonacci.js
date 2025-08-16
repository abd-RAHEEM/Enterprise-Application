function fibonacci(x){
    let fib=[0,1];
    for (let i=2;i<x;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib.slice(0,x);
}
console.log(fibonacci(5));