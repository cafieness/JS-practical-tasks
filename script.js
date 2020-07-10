// date script
function currentTime(){
    let day = new Date();
    let weekday;
    let currHours;
    switch(day.getDay()){
        case 0: weekday = "Sunday";
        break;
        case 1: weekday = "Monday";
        break;
        case 2: weekday = "Thursday";
        break;
        case 3: weekday = "Wednesday";
        break;
        case 4: weekday = "Tuesday";
        break;
        case 5: weekday = "Friday";
        break;
        case 6: weekday = "Saturday";
        break;
    }
    if(day.getHours() < 13){
        currHours = day.getHours() + " AM : ";
    }
    else{
        currHours = day.getHours() - 12 + " PM : ";
    }
    alert("Today is: " + weekday + "\n" +
    "Current time is: " + currHours + day.getMinutes() + " : " + day.getSeconds());
}

//reverse script

function reverse(){
    let num = prompt("Choose the number you want to reverse: ")
    alert("reverse number: " + num.toString().split("").reverse().join(""));
}

//factorial script
function fact(num){
    let number;
    if(num < 1){
        return 1;
    } else{
        number = num * fact(num - 1);
    }
    return number;
}
function factorial(){
    let num = prompt("Choose the number whose factorial you want to find: ");
    let number = fact(num);
    alert("Factorial of a number " + num + " is: " + number);
}
//largerNumber script

function largerNumber(){
    let a = prompt("Choose the first number: ");
    let b = prompt("Choose the second number: ");
    if(parseInt(a) > parseInt(b) ){
        alert ("The larger is: " + a);
    }else{
        alert ("The larger is: " + b);
    }
}

//arrayOrder script

function arrayOrder(){
    let myColor = ["Red", "Green", "White", "Black"];
    let comma = document.getElementById('arrayOrder-comma');
    let plus = document.getElementById('arrayOrder-plus');
    comma.innerHTML = myColor.join(",");
    plus.innerHTML = myColor.join("+");
}

//monthName script

function month_name(date){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const d = new Date(date);
    return monthNames[d.getMonth()];
}

//uppercase script

function uppercase(){
    let name = prompt("Write something: ")
    let character = name[0];
    if(character === character.toUpperCase()){
        alert("The first letter of a string is uppercase");
    }
    else{
        alert("The first letter of a string is lowercase");
    }
}

//smile

function myFace() {    
    var c = document.getElementById("mycanvas");    
    var draw = c.getContext("2d");       
    draw.beginPath();   
    draw.fillStyle = "yellow";       
    draw.arc(200, 180, 120, 0, Math.PI * 2, true);        
    draw.closePath();    
 draw.fill();    
 }   
 function myEye() {    
    var c = document.getElementById("mycanvas");    
    var eye = c.getContext("2d");    
    eye.beginPath();      
    eye.fillStyle = "black";      
    eye.arc(250, 150, 10, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();    
 
    
    eye.beginPath();    
    eye.fillStyle = "black";    
    eye.arc(150, 150, 10, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();    
 }
 function mySmile() {    
    var c = document.getElementById("mycanvas");    
    var smile = c.getContext("2d");    
    smile.beginPath(); 
    smile.strokeStyle = "black";    
    smile.arc(200, 220, 20, 0, Math.PI, false);    
    smile.stroke();    
 }      
 function bodyLoad() {    
    let smile = document.getElementById('smile');
    let canvas = document.createElement('canvas');
    canvas.setAttribute("id", "mycanvas");
    canvas.setAttribute("width", "350");
    canvas.setAttribute("height", "350");
    smile.appendChild(canvas)
    myFace();    
    myEye();   
    mySmile(); 
 }  

 //twister

 function twister(){
    let string1 = document.getElementById("string-1").innerHTML;
    let string2 = document.getElementById("string-2").innerHTML;
    let string3 = document.getElementById("string-3").innerHTML;
    let string4 = document.getElementById("string-4").innerHTML;
    let string5 = document.getElementById("string-5").innerHTML;
    let string6 = document.getElementById("string-6").innerHTML;
    
    
    console.log(string3 + "\n" + string5 + "\n" + string2 + "\n" + string6 + "\n" + string4 + "\n" + string1);
 }

 //colorChange script 
 function colorChange(){
    for(let i = 0; i < 3; i++){
        document.getElementsByClassName("element")[i].style.color = "red";
    }
    for(let i = 3; i < 6; i++){
        document.getElementsByClassName("element")[i].style.color = "green";
    }
    
}
//todoList
function todoList(){
    var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    let ol = document.getElementById("todo-list")
    for (var i=0; i<tasks.length; i++){
        var li=document.createElement('li');
        ol.appendChild(li);
        li.className = "task"
        li.innerHTML=li.innerHTML + tasks[i];
    }
}

//indent
function indent() {
    for(let i = 2; i < 5; i++){
        var ref = document.getElementsByTagName('p')[i];
        var newEl = document.createElement('hr');
        ref.parentNode.insertBefore(newEl, ref.nextSibling); 
    }
}

//substitution script

function substitution(){
    let cola = document.getElementsByClassName("item")[1];
    let choco = document.getElementsByClassName("item")[4];
    let fish = document.createElement("div");
    let parent = choco.parentNode;
    fish.setAttribute("class", "item");
    fish.innerHTML = 'Canned Fish <span class="qty">x 4</span>'
    parent.replaceChild(fish, choco);
    cola.remove();
}

//list script

function list(){
    let ul = document.getElementById("list");
    while(true){
        let item = prompt("Write list item: ");
        let output = document.createElement('li');
        output.innerHTML = item; 
        if(item === null){
            break;
        }
        ul.appendChild(output);
    }
}
