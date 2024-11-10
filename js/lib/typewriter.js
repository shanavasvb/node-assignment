

export function typewrite(element, text, speed) {
     
     element.innerHTML = "";
     for(let i=0; i < text.length; i++){
       setTimeout(()=>{
         element.innerHTML += text.charAt(i);
       }, speed * i);
    }
 }

