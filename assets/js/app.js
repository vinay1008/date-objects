 var cl = console.log;

// var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let d = new Date();
// cl(d);


// let d1 = new Date(1983, 5, 25, 5, 30, 30);
// cl(d1);


// let d2 = new Date(86400000);
// cl(d2);

// let d3 = new Date("March 30,2023 11:11:11");
// cl(d3);


// let t = new Date();
// cl(d);

// let t1 = t.getFullYear();
// cl(t1);

// let t2 = t.getMonth();
// cl(t2);
// cl(`month is ${mL[t2]}`);

// let t3 = t.getDate();
// cl(t3);

// let t4 = t.getHours();
// cl(t4);

// let t5 = t.getMinutes();
// cl(t5);

// let t6 = t.getSeconds();
// cl(t6);

// let t7 = t.getMilliseconds();
// cl(t7);

// let t8 = t.getTime();
// cl(t8);

let s = new Date();
 cl(s);
 
 let year = s.setFullYear(2023);
 cl(`${year}`);

 let s4 = s.setHours(0);
 cl(s4);

 let s5 = s.setMinutes(0);
 cl(s5);

let s6 = s.setSeconds(0);
 cl(s6);



const digitalclock = document.getElementById('digitalclock');

let d = new Date();
let hr = d.getHours();
let mn = d.getMinutes();
let sc = d.getSeconds();

let session = "AM";

let result = `${hr} : ${mn} : ${sc} : ${session}`;

digitalclock.innerHTML = result;