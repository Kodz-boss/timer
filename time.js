// var nonso = setTimeout(() =>{
//     console.log("This text was prinnted after 5 secs");
// }, 5000);
// var non = document.querySelector("button")

// non.addEventListener("click", ()=>{
//     clearTimeout(nonso);
//     console.log("nonso was cleard")
// })

// var loop = 20;
// var wisdom = setInterval(() =>{
// //   console.log("this was printed") 
// console.log(loop--) 
// }, 2000);
// var btn = document.querySelector("button");
// btn.addEventListener("click", () =>{
//     clearInterval(wisdom);
//     console.log("This was cleared");
// });

// var start = document.querySelector(".start");
// var stop = document.querySelector(".stop");
// var head = document.querySelector("h1");

// var timer = 0;

// start.addEventListener("click", () =>{
//     var stopWatch = setInterval(() =>{
//         head.innerHTML = timer++
//         stop.addEventListener("click", () =>{
//             clearInterval(stopWatch);
//         })
//     }, 1000);
// });


var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var head = document.querySelector("h1");

var timer;
var seconds = 0;
var minutes = 0;
var hours = 0;

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

start.addEventListener("click", () => {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        head.innerHTML = `Hr ${formatTime(hours)}: Min ${formatTime(minutes)}: Secs ${formatTime(seconds)}`;
    }, 500);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
});
