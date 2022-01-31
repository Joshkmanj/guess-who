$(document).ready(onReady);


function onReady(){

buildPictures();
console.log('Here are all the available people:', people);

assignCorrectOne();

}

// Builds DOM out with divs for each object in the people array
function buildPictures(){
    who = 0;
    for (let person of people){
    console.log(`${person.githubUsername}`);
    $('body').append(`<div class="pictures" data-id="${who}">
    <img src="https://github.com/${person.githubUsername}.png?size=250" 
    alt="Profile image of Chris">
    </div>`)
    who ++;
    }
}