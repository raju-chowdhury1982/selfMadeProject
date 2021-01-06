// alert('welcome');
/*
//problem algo:
1. need start date
2. need end date
3. suntract them
4. find i.days, ii. hours, iii. mins, iv. seconds
*/
//declareing the variables
const days = document.querySelector('.dys');
const hrs = document.querySelector('.hrs');
const mins = document.querySelector('.min');
const secs = document.querySelector('.sec');
//set new years date
const newYear = new Date('1/01/2022');
// defining the function
function countdown(){
    const refDate = new Date(newYear);
    const currentDate = new Date();
    const diff = (refDate - currentDate)/1000;
    const day = Math.floor(diff/(3600 * 24));
    const hour = Math.floor(diff%(3600 * 24)/3600);
    const min = Math.floor(diff%(3600 * 24)%3600/60);
    const sec = Math.floor(diff%(3600 * 24)%3600%60);
    days.innerText = day;
    hrs.innerText = hour;
    mins.innerText = min;
    secs.innerText = sec;
    //console.log(`days: ${day}, hours: ${hour}, min: ${min} and sec: ${sec}.`);
}

setInterval(countdown, 1000);






