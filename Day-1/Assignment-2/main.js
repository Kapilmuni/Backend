const {sum,sub,mul,div,sin,cos}=require("./index");
const crypto=require("crypto")

if (process.argv[2]==="sum") {
    console.log(sum(Number(process.argv[3]),Number(process.argv[4])));
}
else if (process.argv[2]==="sub") {
    console.log(sub(Number(process.argv[3]),Number(process.argv[4])));
}
else if (process.argv[2]==="mul") {
    console.log(mul(Number(process.argv[3]),Number(process.argv[4])));
}
else if (process.argv[2]==="div") {
    console.log(div(Number(process.argv[3]),Number(process.argv[4])));
}
else if (process.argv[2]==="sin") {
    console.log(sin(Number(process.argv[3])));
}
else if (process.argv[2]==="cos") {
    console.log(cos(Number(process.argv[3])));
}
else if (process.argv[2]==="random"){
    const randomBinary = crypto.randomBytes(4).toString("binary");
    console.log(randomBinary);
}
else {
    console.log("error");
}