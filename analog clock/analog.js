let hr = document.querySelector("#hour-hand");
let min = document.querySelector("#minute-hand");
let sec = document.querySelector("#second-hand");

function analogclock(){
    let now = new Date();
    let seconds = now.getSeconds();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = hours * 30 + minutes * 0.5;
    
    hr.style.transform = `rotate(${hourDeg}deg`;
    min.style.transform = `rotate(${minuteDeg}deg`;
    sec.style.transform = `rotate(${secondDeg}deg`;
}

setInterval(analogclock, 1000);
analogclock();
