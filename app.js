document.getElementById("BtnSub").disabled = true;
alert('The Courses inserted below For higher education students ONLY!');

var age = prompt('How old are you ?');
var times=0;

if (age == 18 || age > 18) 
{
  times=1;
console.log('you can search now!');
document.getElementById("BtnSub").disabled = false;}

else 
{
correctAge();
if (times==1){
 console.log('Congrats, you can search now!');
 document.getElementById("BtnSub").disabled = false;}}

document.write(RateMe());


function correctAge()
{
while (!(age == 18 || age > 18))
    age = prompt('How old are you ?');

times=1;
return times;
}
 

function RateMe()
{
  var stars = prompt('Give us rating Please 1-5 (Stars)');
  if (stars >= 5)
  stars = 5;

  var starResults='';

  for (var i = 0; i < stars; i++) 
  starResults += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">';

  return starResults;
}



