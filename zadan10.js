//1

//let str="";
//for(let i=1;i!=6;i++){
//	str+="5 "}
//for(let i=1;i!=6;i++){
//	console.log(str)}

//2

//let str="";
//for(let i=1;i!=11;i++){
//    str=str+i+" "
//}
//for(let i=1;i!=5;i++){
//    console.log(str)
//}

//3

//for(let i=4;i!=8;i++){
//    for(let j=1;j!=10;j++){
//    process.stdout.write(i+""+j+" ")
//}
//  console.log()  
//}

//4

//let str="";
//for(let i=1;i!=6;i++){
//	str+="5 "
//    console.log(str)
//}

//5

//let str="";
//for(let i=6;i!=1;i--){
//    for(let j=1;j!=i;j++){
//        process.stdout.write("1 ")
//}
//  console.log()  
//}

//6

//let str="";
//for(let i=1;i!=6;i++){
//    for(let j=1;j<=i;j++){
//        process.stdout.write(i+" ")
//}
//  console.log()  
//}

//7

//let str="";
//let num=5;
//for(let i=6;i!=1;i--){
//    for(let j=1;j!=i;j++){
//        process.stdout.write(num+" ")
//}
//  console.log()
//  num++  
//}

//8

//let num=10;
//let str="";
//for(let i=1;i!=6;i++){
//    for(let j=1;j<=i;j++){
//        process.stdout.write(num+" ")
//}
//  console.log()
//  num+=10 
//}

//9

//let str="";
//let num=5;
//for(let i=6;i!=1;i--){
//    for(let j=1;j!=i;j++){
//        process.stdout.write(num+" ")
//}
//  console.log()
//  num+=5 
//}

//10

//function del(a)
//{
//    let count=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){count++}
//    }
//    return count;
//}
//
//for(let i=1;i<=300;i++){
//    if(del(i)==5)(console.log(i))
//}

//11

//function del(a)
//{
//    let count=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){count++}
//    }
//    return count;
//}
//
//for(let i=200;i<=500;i++){
//    if(del(i)==6)(console.log(i))
//}

//12

//function del(a)
//{
//    let count=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){count++}
//    }
//    return count;
//}
//let a=1
//let b=300
//let k=5
//for(let i=a;i<=b;i++){
//    if(del(i)==k)(console.log(i))
//}

//13

//function del(a)
//{
//    let count=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){count++}
//    }
//    return count;
//}
//let a=1
//let b=300
//let k=5
//let max=1
//for(let i=a;i<=b;i++){
//    if(del(i)==k)(console.log(i))
//}

//14

//function isPrime(a)
//{
//    if(a===1||a===0){return false;}
//
//    else
//    {
//        for(let i=2;i<a;i++)
//        {
//            if(a%i===0)
//            {
//                return false;
//            }
//        }
//        return true
//    }
//}
//
//
//
//for(let i=99;i<=1000;i++){
//    if(isPrime(i)){console.log(i)}
//}

//15

//function isPrime(a)
//{
//    if(a===1||a===0){return false;}
//
//    else
//    {
//        for(let i=2;i<a;i++)
//        {
//            if(a%i===0)
//            {
//                return false;
//            }
//        }
//        return true
//    }
//}
//
//let count=0;
//let i=0;
//while(count<=100){
//i++;
//    if(isPrime(i)){console.log(i); count++}
//}

//16

//function sumDel(a)
//{
//    let sum=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){sum+=i}
//    }
//    return sum;
//}
//
//
//for(let i=50;i<=70;i++)
//{
//    console.log(sumDel(i))
//}

//17

//function sumDel(a)
//{
//    let sum=0;
//    for(let i=1;i<=9;i++)
//    {
//        if(a%i==0){sum+=i}
//    }
//    return sum;
//}
//
//for(let i=100;i<=300;i++)
//{
//    if(sumDel(i)==50){console.log(i)}
//}

//18

function sumDel(a)
{
    let sum=0;
    for(let i=1;i<=9;i++)
    {
        if(a%i==0){sum+=i}
    }
    return sum;
}

for(let i=300;i<=600;i++)
{
    if(sumDel(i)%10==0){console.log(i)}
}















