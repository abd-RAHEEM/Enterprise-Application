function rev (s){
    let x=''
    for(let i=s.length-1;i>=0;i--){
        x+=s[i];
    }
    return x;
}
document.getElementById("reverse").addEventListener("submit",function(e){
    e.preventDefault();
    let m=document.getElementById("text").value;
    let r=rev(m);
    document.getElementsByClassName("res")[0].innerHTML=`reversed string = ${r}`;
})