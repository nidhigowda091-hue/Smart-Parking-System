let selectedSlot = null;
let timerInterval;

function selectSlot(element, slotName){

if(element.classList.contains("booked")){
alert("Slot already booked!");
return;
}

selectedSlot = element;

document.querySelectorAll(".slot").forEach(s => s.style.border="none");
element.style.border="3px solid yellow";

document.getElementById("bookingSection").style.display="block";
document.getElementById("selectedSlotText").innerText="Selected Slot: " + slotName;

}

function confirmBooking(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let vehicle = document.getElementById("vehicle").value;

if(!selectedSlot){
alert("Please select a slot first!");
return;
}

if(name==="" || phone==="" || vehicle===""){
alert("Please fill all details!");
return;
}

selectedSlot.classList.add("booked");
selectedSlot.style.border="none";

document.getElementById("confirmation").innerHTML=
"Slot Booked Successfully!<br>Name: "+name+
"<br>Phone: "+phone+
"<br>Vehicle: "+vehicle+
"<br>Arrive within 20 minutes.";

startTimer();

document.getElementById("bookingForm").reset();
}

function startTimer(){

let timeLeft = 1200; // 20 minutes

clearInterval(timerInterval);

timerInterval = setInterval(function(){

let minutes = Math.floor(timeLeft/60);
let seconds = timeLeft%60;

document.getElementById("timer").innerHTML=
"Time Remaining: "+minutes+"m "+seconds+"s";

timeLeft--;

if(timeLeft<0){
clearInterval(timerInterval);
document.getElementById("timer").innerHTML="Time expired! Slot available again.";
selectedSlot.classList.remove("booked");
selectedSlot=null;
}

},1000);

}