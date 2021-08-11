var array=[];
var result=prompt("Would you like to start the roster web app? y/n");
var action="abcd";
if (result=="y")
{

while(action!="quit")
{
var action=prompt("Please select an action: add, remove, display, or quit.");
if(action=="add")
{
  var name=prompt("What name would you like to add? ");
array.push(name);
}
else if(action=="remove")
{
  var nameremoved=prompt("What name would you like to remove?");
  array.pop(nameremoved);
}
else if (action=="display")
{
  console.log(array);
}


}
}
alert("Thanks for using the Web App! Please refresh the page to start over.");
