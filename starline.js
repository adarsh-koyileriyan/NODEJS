var line=require('readline-sync')
var count=line.question("enter how many lines you have to print ")
for(i=1;i<=count;i++)
{
    var s =""
    for(j=1;j<=i;j++){
        s=s+"*"
       
    }
    console.log(s)
}