const texts = [
    "A Year of Glory",
    "Five Wins, One Year" // Store text in an array for indexing
];
let speed = 100;
const textelements = document.querySelector('.type-writer-text');
let textindex = 0;
let charindex = 0;

function typeWriter() {
    if (charindex < texts[textindex].length) {
        textelements.innerHTML += texts[textindex].charAt(charindex);
        charindex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Calls eraseText after typing is complete
    }
}

function eraseText() {
    if (charindex > 0) {
        textelements.innerHTML = texts[textindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(eraseText, speed);
    } else {
        textindex = (textindex + 1) % texts.length; // Loop back to the first text
        setTimeout(typeWriter, speed);
    }
}

function eraseText(){
    if(textelements.innerHTML.length > 0){
        textelements.innerHTML = textelements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50)
    }else{
        textindex = (textindex + 1) %texts.length;
        charindex =0 ;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter;
