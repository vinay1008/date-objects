var cl = console.log;


let info = 'I love Javascript';

// cl(info.reverse());
//let arr = ["html","css","js","typescript"];
//cl(arr.reverse());


// let arr = info.split();
// cl(arr);
// let revarr = arr.reverse();
//cl(revarr);
//let revstr = revarr.join();
//cl(revstr);
// function revstr(str){
//     let arr = info.split();
//     let revarr = arr.reverse();
//     let revstr = revarr.join();
//     return revstr;
// }


function revstr(str){
    if(typeof str != 'string'){
        alert("Please enter valid string")
        return
    }
    return str.split('').reverse().join(''); 
}

cl(revstr(info));


