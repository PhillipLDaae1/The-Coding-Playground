const title = `The Coding Playground`;

let i = 0;

const typing = () => {
    if (i < title.length) {
        document.getElementById("homepageTitle").innerHTML += title.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();