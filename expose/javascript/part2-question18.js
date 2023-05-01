function createTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let time = setInterval(createTime, 1000);