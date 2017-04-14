var random = document.getElementById('random');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var red = document.getElementById('red');
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var teal = document.getElementById('teal');
var white = document.getElementById('white');
var grey = document.getElementById('grey');
var black = document.getElementById('black');
var colors = document.getElementById('colors');
var userChoice = document.getElementById('userChoice');
var currentColor = 'black';

function createTd1(num) {
    // var i = 0
    for (i = 0; i <= num; i++) {

        var newTd = document.createElement('td');
        // newTd.className = 'td' + i;
        newTd.style.width = '.83%';
        newTd.style.height = '.83%';
        newTd.style.float = 'left';
        newTd.style.paddingBottom = '.5px';
        // newTd.innerHTML = i;
        newTd.style.position = 'relative';
        document.body.getElementsByTagName('tr')[0].appendChild(newTd);
    }
}

createTd1(3903)

document.getElementsByTagName('tr')[0].addEventListener('click', function(event) {
    console.log(event.target)
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = userChoice.style.color;
    }

});

//??maybe palatte chooser?? document.getElementsByTagName('section').addEventListener('click', function(event){
//   evnt.target.style.backgroundColor = userChoice.style.color;
// })

//////squares experiment --> attach to td vs tr
// var squares = document.getElementsByTagName('td');
// console.log(squares);
// squares.addEventListener('click', function(){
//   console.log('listening');
// event.target.style.backgroundColor = 'green';

// for(i = 0; i < document.getElementsByTagName('td').length; i++ ){
// document.getElementsByTagName('td')[i].style.backgroundColor = 'green'};
// });

//


colors.addEventListener('click',function (event) {
  userChoice.style.backgroundColor =  event.target.id;
});


colors.addEventListener('click',function (event) {
  userChoice.style.color =  event.target.id;
});

// function colorChange(random){
//
// }
//
//
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
