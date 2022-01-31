$(document).ready(onReady);


function onReady(){

buildPictures();
console.log('Here are all the available people:', people);

$('body').on('click', '.pictures', pictureChecker)
}

// Builds DOM out with divs for each object in the people array
function buildPictures(){
    who = 0;
    for (let person of people){
    console.log(`${person.githubUsername}`);
    $('body').append(`<div class="pictures" data-id="${who}">
    <img src="https://github.com/${person.githubUsername}.png?size=250" 
    alt="Profile image of ${person.name}">
    </div>`)
    who ++;
    }
}

function pictureChecker(){
    console.log('who\'d ya click?', $(this).data().id);
    if (($(this).data().id) == correctNumber) {
        alert(`You're a BOSSsSs`);
        window.location.reload();
    } else{
        alert('You suck, check again nerd')
    }
}


let correctNumber = Math.floor(Math.random() * (1 + (people.length-1) - 0) + 0);

console.log(correctNumber);