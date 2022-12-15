var cl = console.log;
function createclock(){
    const digitalclock = document.getElementById('digitalclock');

    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    if(hr>=12){
        session = "PM";
    }
    if(hr > 12){
        hr = hr - 12;
    }
    // if(hr < 10){
    //     hr = '0'+ hr;
    // }
    // if(min < 10){
    //     min = '0'+ min;
    // }
    // if(sec < 10){
    //     sec = '0'+ sec;
    // }
    hr = setzero(hr);
    min = setzero(min);
    sec = setzero(sec);
    let result = `${hr} : ${min} : ${sec} : ${session}`;
    digitalclock.innerHTML = result;
    setTimeout(createclock , 1000)
}
createclock();



function setzero(num){
    // if(num < 10){
    //     return '0' + num
    // }else {
    //     return num
    // }
    return num < 10 ? '0'+ num : num;
}