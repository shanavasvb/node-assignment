export function typewriteAge(element){

let age = getAge();
let i=0;
element.textContent = i + "year";
let intervalId = setInterval( ()=> {
  i++;
  element.textContent = i + "-year-old" ;
  if(i >= age) {
   clearInterval(intervalId);
  }
  
}, 100);

 
}


export function getAge() {
let bday = new Date("05 june 2003, 00:00:00");
let today = new Date(Date.now());
let currentYear = today.getFullYear();
let bdayYear = bday.getFullYear();
let age = currentYear - bdayYear;
let monthDiff = today.getMonth() - bday.getMonth();

if ( monthDiff < 0 ||( monthDiff === 0 && today.getDate() < bday.getDate())){
  age--;
}
return age;
}


