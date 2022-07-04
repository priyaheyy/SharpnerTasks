//task- editing the li tag by getElementsByClassName
  var items=document.getElementsByClassName('list-group-item');
  console.log(items);
  for(var i=0;i<items.length;i++){
     items[i].style.backgroundColor= 'yellow';
     }

//task- editing the li tag by getElementsByTagName
var li=document.getElementsByTagName('li');
console.log(li);
for(var i=0;i<li.length;i++){
   li[i].style.backgroundColor= 'yellow';
   }