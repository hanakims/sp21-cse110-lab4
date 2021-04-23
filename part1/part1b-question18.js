function dateSec () {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(dateSec, 1000);