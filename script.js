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

// 1) write a function to add a specified of days to a given date
const addDaysToDate=(date,extraDay)=>{
let updatedDate=date.setDate(date.getDate()+extraDay);
updatedDate=new Date(updatedDate);
return updatedDate;
}

const date=new Date("2025-02-17");
const newDate=addDaysToDate(date,7);
console.log(newDate);
console.log(newDate.toLocaleDateString());

//2) write a function to calculate the difference in days between two given dates
const getDaysDifference=(d1,d2)=>{
    let oneday=24*60*60*1000;
    let diff=Math.abs(d2-d1);
    return Math.round(diff);
}

const d1=new Date("2024-02-19");
const d2=new Date("2024-03-01");
console.log(getDaysDifference(d1,d2));

// timing based events in JS

function delayedFunction(x){
    console.log(" The function was delayed by 2000 milliseconds(2 seconds)",x);

}
const myWork=setTimeout(delayedFunction,2000);
setTimeout(()=>delayedFunction(5),2000);

function repeatedFunction(){
    console.log(" This function will be repeated every 1000 milliseconds");
}
const work=setInterval(repeatedFunction,2000);

clearTimeout(myWork);
clearInterval(work,10000);




