let retirementDate;

fetch("data/profile.json")
.then(response => response.json())
.then(data=>{

document.getElementById("name").innerHTML=data.name;

document.getElementById("position").innerHTML=data.position;

document.getElementById("school").innerHTML=data.school;

document.getElementById("quote").innerHTML=data.quote;

retirementDate=new Date(data.retirement);

let html="";

data.timeline.forEach(item=>{

html+=`

<div class="timeline-item">

<h3>${item.year}</h3>

<p>${item.title}</p>

</div>

`;

});

document.getElementById("timeline").innerHTML=html;

countdown();

setInterval(countdown,1000);

});

function countdown(){

let now=new Date();

let distance=retirementDate-now;

if(distance<0){

return;

}

let days=Math.floor(distance/(1000*60*60*24));

let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes=Math.floor((distance%(1000*60*60))/(1000*60));

let seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}
