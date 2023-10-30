var read=require('readline-sync')
function summ(n1,n2)
{
    console.log(n1+n2)
  
}
function sub(n1,n2)
{
    console.log(n1-n2)
}
function mul(n1,n2)
{
n3=n1*n2
   console.log(n3)
}
function div(n1,n2)
{
 console.log(n1/n2)
}

do{
    console.log("enter two numbers")
var a=read.questionInt()
var b=read.questionInt()


console.log("ente which operation you want")
console.log(" 1. ADDITON")
console.log(" 2. SUBSTRACTION")
console.log(" 3. MULTIPLICATIN")
console.log(" 4. DIVITION")
c=read.questionInt('enter')


if(c==1)
{
  //return a+b//  summ(a,b)
 summ(a,b)
}
else if (c==2)
{
    sub(a,b)

}
else if (c==3)
{
    mul(a,b)

}
else if(c==4)
{
    div(a,b)
}
else
{
    console.log("enter currect number")
}
/*default:
    console.log("enter currect value")*/

ch=read.question('press 1 for contine press 2 for exit')

}while(ch==1);

console.log("good bye")