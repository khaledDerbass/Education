document.getElementById("BtnSub").disabled = true;
alert('The Courses inserted below For higher education students ONLY!');

var age = prompt('How old are you ?');
var times;

if (age == 18 || age > 18) {
  console.log('you can search now!');
document.getElementById("BtnSub").disabled = false;

}
else {
while (!(age == 18 || age > 18))
{
    age = prompt('How old are you ?');
}
console.log('Congrats, you can search now!');
document.getElementById("BtnSub").disabled = false;
}



times=prompt('Please insert # of Repetition time');
for (var i=0;i<times;i++)
{
document.write('<img src="images/courses.jpg" alt="Motivate study" width="15%">');
}
 



