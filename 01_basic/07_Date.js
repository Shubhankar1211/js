// 
let myDate = new Date();
console.log(myDate); // 2025-02-28T06:08:18.024Z this is defiently unreadable

console.log(myDate.toString()); //Fri Feb 28 2025 06:10:05 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Feb 28 2025
console.log(myDate.toISOString()); //2025-02-28T06:12:40.541Z
console.log(myDate.toJSON()); //2025-02-28T06:12:40.541Z
console.log(myDate.toLocaleDateString()); //2/28/2025
console.log(myDate.toLocaleString()); //2/28/2025, 6:12:40 AM

console.log(typeof myDate);//object

// month js me 0 se start hote h 
let createddate0 = new Date(2024 , 0 ,25);
console.log(createddate0);// in this fromat it is m=unreadable that is why we use strigndate fucntion
console.log(createddate0.toDateString());


let createddate1 = new Date("2024-01-14");// this date type fromat we don not use in india it is used in foreign lands yyyy-mm-dd
console.log(createddate1.toLocaleString())// output remian same because of loacl string which defantely cheng it into indiana fromate


let createddate2 = new Date("01-14-2024");// thi sis use in india mm--dd-yyyy
console.log(createddate2.toLocaleString())

let timeStamp = Date.now();
console.log(timeStamp); // it will give value in miliseconds from 1970 1740724267696
console.log(createddate2.getTime());// it will return time so that we can compare it 

// beautiful interview question 
console.log(Date.now());// it will return date in milisecond but we have to conver it into seconds so we have divide it by 1000
console.log(Date.now()/1000);// it will return values in decimal value also but we don't need it 1740724692.214
console.log(Math.floor(Date.now()/1000)) // it willl return timestamp in seconds 1740724812


console.log(createddate2.getDay());
console.log(createddate2.getMonth()+1);
console.log(createddate2.getHours());

// this is very important and it is very much costumizable
newDate.toLocaleString('default',{
    weekday: "long",
})
