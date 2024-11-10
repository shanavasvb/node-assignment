import {typewriteAge, getAge} from './lib/age.js';
import {typewrite} from './lib/typewriter.js';

// update age dynamically
let ageElement = document.querySelector("#age");
typewriteAge(ageElement);
const age = getAge()    

//typewrite effect on text
const descText = "I tell computers to do things, sometimes they listen."
let desc = document.querySelector("#desc");
let speed = 50;
setTimeout( () => {
     typewrite(desc, descText, speed);
}, age*100);
