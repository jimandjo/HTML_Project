let dayAdvice = new XMLHttpRequest();
dayAdvice.open('GET', 'https://api.adviceslip.com/advice', true);
dayAdvice.send();

dayAdvice.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let dayAdvice = JSON.parse(this.responseText);
            let myDiv = document.createElement('div');
            let adviceTag = document.createElement('p');
            adviceTag.setAttribute ('class', 'lower')
            adviceTag.innerHTML = dayAdvice.slip.advice;

            myDiv.appendChild(adviceTag);
            document.getElementById("day").appendChild(myDiv);
            
        }
    } 
}

//Name

let myJD = document.getElementById("jD");

function chng() {
    document.getElementById("jD").style.fontSize = "2em";
}
function rev() {
    document.getElementById("jD").style.fontSize = "1.17em";
}
myJD.addEventListener('mouseover', chng);
myJD.addEventListener('mouseout', rev);


//Title

let mysoWD = document.getElementById("soWD");

function chng1() {
    document.getElementById("soWD").style.fontSize = "2em";
}
function rev1() {
    document.getElementById("soWD").style.fontSize = "1.17em";
}
mysoWD.addEventListener('mouseover', chng1);
mysoWD.addEventListener('mouseout', rev1);

//Technical skills

let myTs = document.getElementById("ts");

function chngBckg() {
    document.getElementById("ts").style.backgroundColor = "lightgrey";
}
function revBckg() {
    document.getElementById("ts").style.backgroundColor = "grey";
}
myTs.addEventListener('mouseover', chngBckg);
myTs.addEventListener('mouseout', revBckg);

//Soft Skills

let mySs = document.getElementById("ss");

function chngBckg1() {
    document.getElementById("ss").style.backgroundColor = "lightgrey";
}
function revBckg1() {
    document.getElementById("ss").style.backgroundColor = "grey";
}
mySs.addEventListener('mouseover', chngBckg1);
mySs.addEventListener('mouseout', revBckg1);

//Hobbies

let myHb = document.getElementById("hb");

function chngBckg2() {
    document.getElementById("hb").style.backgroundColor = "lightgrey";
}
function revBckg2() {
    document.getElementById("hb").style.backgroundColor = "grey";
}
myHb.addEventListener('mouseover', chngBckg2);
myHb.addEventListener('mouseout', revBckg2);

function myFunction() {
    document.getElementById("myDiv").style.border = "thick solid #0000FF";
}

