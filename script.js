// new Date()
//new Date(date string)
//new Date(year,month)
//new Date(year,month,day)
//new Date(year,month,day,hours)
//new Date(year,month,day,hours,minutes)
//new Date(year,month,day,hours,minutes,seconds)
//new Date(year,month,day,hours,minutes,seconds,ms)
//new Date(milliseconds)


const currentDate=new Date();
console.log(currentDate);

const dateString="2025-04-07T16:31:46.820Z";
const dateFromString=new Date(dateString);
console.log(dateFromString);

const date1=new Date(2025,12);
console.log(date1);

const date2=new Date(2025,4,17);
console.log(date2);

const date3=new Date(2025,4,17,10);
console.log(date3);

const date4=new Date(2025,4,17,10,45);
console.log(date4);

const curMilliSeconds=new Date().getTime();
const dateFromMiliseconds=new Date(curMilliSeconds);
console.log(dateFromMiliseconds);


// Javascript Get Date Methods / Getting Components:
const currDate=new Date();
console.log(currDate);

const year=currDate.getFullYear();
console.log(year);

const month=currDate.getMonth();
console.log(month);

const day=currDate.getDay();
console.log(day);

const time=currDate.getTime();
console.log(time);

const dates=new Date();
dates.setFullYear(2023);
console.log(dates);

const dates2=new Date();
dates2.setMonth(6);
console.log(dates2);

const dates3=new Date();
dates3.setHours(2);
console.log(dates3);

const datexyz=new Date();
const localString=datexyz.toLocaleString();
console.log(localString);

const x=new Date();
const localltimeString=x.toLocaleTimeString();
console.log(localltimeString);

const y=new Date();
const local=y.toLocaleDateString();
console.log(local);

let nowDate=new Date();
console.log(nowDate);
console.log(nowDate.getTime());




