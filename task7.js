var newDiv=document.createElement('div');
newDiv.className='hello';  //adding class
newDiv.id='hello1';  //adding id
//Now go head and add HEllo word before Item Lister

newDiv.setAttribute('title', 'Hello Div'); //add attribute
var newDivText = document.createTextNode('Hello world'); //creating text node
newDiv.appendChild(newDivText);   //add text to div
var container=document.querySelector('header .container'); //in header we need container class
var h1=document.querySelector('header h1');
console.log(newDiv);   
newDiv.style.fontSize= '30px';
container.insertBefore(newDiv, h1);



//Now go head and add HEllo word before Item 1

var parentNod=document.getElementById('items');
var newli=document.createElement('li');
var liText=document.createTextNode('Hello World');
parentNod.appendChild(liText);
parentNod.innerHTML = '<li>item 1</li> <br>
                    <li>item 2</li><br>
                    <li>item 3</li><br>
                    <li>item 4</li>';
parentNod.innerHTML='<li>Hello world</li>'+parentNod.innerHTML;