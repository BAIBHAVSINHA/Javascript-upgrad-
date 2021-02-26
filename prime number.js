var fno = prompt('Enter a no: ');
    var flag = 1;
for(var i=2;i*i<=fno;i++)
   {
      if(fno%i == 0)
      {
         flag = 0;
         break;
      }
   }
if(flag == 1)
{
  console.log("prime");}
else{
  console.log("not-prime");}
