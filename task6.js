var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor='green';

var item=document.querySelector('.list-group-item:nth-child(3)');
item.style.visibility= 'hidden';


var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
odd[i].style.backgroundColor='green';
}