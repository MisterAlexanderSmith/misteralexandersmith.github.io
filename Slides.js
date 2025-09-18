var Birth = new Date("Sep 20, 2013 13:00:00").getTime();
var x = setInterval(function() {
    var Now = new Date().getTime();
    var Distance = Now - Birth;
    var Days = Math.floor(Distance / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
    var Seconds = Math.floor((Distance % (1000 * 60)) / 1000);
    document.getElementById('Age').textContent = Days.toLocaleString() + "d " + Hours + "h " + Minutes + "m " + Seconds + "s";
    document.getElementById('age').textContent = Days.toLocaleString() + "d " + Hours + "h " + Minutes + "m " + Seconds + "s";  
}, 1000);

document.addEventListener('keydown', (event) => {
    if (event.key == '~') {
        let invis = document.getElementsByClassName('jsr')
        for (let el of invis)
        el.classList.toggle('invis')
        
    }
});
