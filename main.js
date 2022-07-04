// getting single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container')); //.means it is a class
// console.log(document.querySelector('.items'));
// console.log(document.querySelector('item'));



// getting multiple element

//console.log(document.querySelectorAll('.item'));  //displays all the items
                              // like headings, id, class, tag or anything
// console.log(document.getElementsByClassName('item')); //displays only class name
// console.log(document.getElementsByTagName('li'));

// const items=document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));               


//DOM manipulation , DOM is user interface what we see on the screen
// const ul=document.querySelector('.items'); 
// ul.remove();
// ul.lastElementChild.remove();  //last item gets deleted
// ul.firstElementChild.textContent='Hello'; //sets hello as the first item
// ul.children[1].innerText='Brad';  //add 'brad' in 0th position

// //innertext and textcontent are same

// ul.lastElementChild.innerHTML='<h1>Hello</h1>';
// ul.firstElementChild.style.color='red'; 
// ul.children[1].style.color='green'; 

// const btn=document.querySelector('.btn');
// btn.style.background='red';


//Events
// const btn=document.querySelector('.btn');
// btn.addEventListener('click',(e) => {  //e is event parameter
//     e.preventDefault();
//     console.log ('click');
//     console.log(e);  //event object
//     console.log(e.target); //gives the element that the event(button in this case) is on
//     console.log(e.target.className);  
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
// });


// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseout',(e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
// });

// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseover',(e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
// });

//Making a tiny little app
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pwd = document.querySelector('#Password');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// const date = document.querySelector('#Time for Call');
// const time = document.querySelector('#Time for Call');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value==='' || emailInput.value==='' || pwd.value==='') {
        //alert('Please enter fields');
       // msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    } else {
        console.log('success');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
 
    userList.appendChild(li);

    //clear fields
    nameInput.value='';
    emailInput.value='';
    //pwd.value='';
    // date.value='';
    // time.value='';
}   
}