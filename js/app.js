const seco = document.querySelector(".seco");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const dh = document.querySelector(".dh");
const dm = document.querySelector(".dm");
const ds = document.querySelector(".ds");
const dy = document.querySelector(".parent3");

const aud = document.querySelector("#aud");

const date = new Date();
const Hours = date.getHours()
const Minutes = date.getMinutes()
const Seconds = date.getSeconds()

hour.style.transform = `rotate(${(Hours*30)+((Minutes*6)/12)}deg)`
min.style.transform = `rotate(${(Minutes*6)+(Seconds*6)/60}deg)`
seco.style.transform = `rotate(${Seconds*6}deg)`

function Fdh() {
    if (Hours < 10)
    {
        dh.textContent = `0${Hours}`
    }
    else 
          dh.textContent = `${Hours}`
}
function Fdm() {
    if (Minutes < 10)
    {
        dm.textContent = `0${Minutes}`
    }
    else 
          dm.textContent = `${Minutes}`
        }
        
        var count = Seconds;
function Fds() {
    if (count < 10)
    {
        ds.textContent = `0${count}`
    }
    else 
        ds.textContent = `${count}`
}

Fdh()
Fdm()
Fds()


setInterval(() => {
    seco.style.transform += `rotate(0.6deg)` 
    min.style.transform += `rotate(0.01deg)` 
    hour.style.transform += `rotate(${100/120000}deg)` 
    
}, 100)

setInterval(() => {

    ds.textContent++;
    if (ds.textContent < 10) {
        ds.innerHTML =0+ds.textContent
    }
    if (ds.textContent == 60) {
        ds.textContent = 0;
        dm.textContent++;
        if (dm.textContent < 10) {
            dm.innerHTML =0+dm.textContent
        }
    }
    if (dm.textContent == 60) { 
        dm.textContent = 0;
        dh.textContent++;
        if (dh.textContent < 10) {
            dh.innerHTML =0+dh.textContent
        }
        aud.play()
    }
    count++
}, 1000)


dy.textContent = date.toDateString()


