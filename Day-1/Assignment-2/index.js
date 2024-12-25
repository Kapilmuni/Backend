function sum(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function mul(a,b) {
    return a*b;
}
function div(a,b) {
    if (b==0){
        return "error";
    }
    return a/b;
}
function sin(angle) {
    return Math.sin(angle);
}
function cos(angle) {
    return Math.cos(angle);
}
module.exports={sum,sub,mul,div,sin,cos};