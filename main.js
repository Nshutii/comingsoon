//set up end time for countdown
let launchDate = new Date("Oct 16,2020 17:00:00").getTime();

//set up timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
  //get current time
  let now = new Date().getTime();

  //get the difference in time left to reach 0
  let t = launchDate - now;

  //check if time is > 0
  if (t > 0) {
    //set up days,hours,minutes,seconds
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) { days = "0" + days }

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours }

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    if (mins < 10) { mins = "0" + mins }

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs }

    //create time string
    let time = `${days} Day ${hours} Hours ${mins} Minutes ${secs} Seconds`;
    document.querySelector('.countdown').innerText = time;
  }
}


// product slider

