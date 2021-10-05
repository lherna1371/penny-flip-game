
let maxNumber = 2;

// html selected elements:
let actionBtn = document.querySelector(".action-btn"); //action button 
let objectImage = document.querySelector(".object-img"); //image tag
let resultHeader = document.querySelector(".result-header") //header that displays results
// console.log(actionBtn, objectImage, resultHeader);

// html table cell elemets:
let resutlOneCount = document.querySelector(".result-one-cnt");
let resultOnePercent = document.querySelector(".result-one-percent");
let resultTwoCount = document.querySelector(".result-two-cnt");
let resultTwoPercent = document.querySelector(".result-two-percent");
// console.log(resutlOneCount, resultOnePercent, resultTwoCount, resultTwoPercent);


// event listener for flip button: 
actionBtn.addEventListener("click", function(){
    // math function that will randomize number:
    let randomNumber = Math.ceil(Math.random() * maxNumber); 

    // condition that updates page based on random number one or two: 
    if (randomNumber === 1){
        console.log("It was one");
    } else {
        console.log("It was two");
    }
})
