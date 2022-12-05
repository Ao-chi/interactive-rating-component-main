const submitBtn = document.querySelector("#submit");
const ratetBtn = document.querySelector("#rate");
const thankYouCard = document.querySelector(".thank-you");
const cardOne = document.querySelector(".card-one");

const ratingValue = document.querySelectorAll("input[name='rating']");
const selectedValue = document.querySelector("#selected");

submitBtn.addEventListener("click", showThankyouCard);
ratetBtn.addEventListener("click", showCardOne);
let submitCount = 0;
let totalAttempts = 1;

function showThankyouCard() {
    thankYouCard.classList.toggle("show");
    cardOne.classList.toggle("d-none");
    getValue();

    if (submitCount != totalAttempts) {
        submitCount++;
        // console.log(submitCount);
    } else {
        submitCount = 0;
        ratetBtn.setAttribute("disabled", "");
        // console.log("out of tries");
    }
}

function showCardOne() {
    reset();
    thankYouCard.classList.toggle("show");
    cardOne.classList.toggle("d-none");
}

//reset selection
function reset() {
    for (let i = 0; i < ratingValue.length; i++) {
        const btn = ratingValue[i];
        if ((btn.checked = true)) {
            btn.checked = false;
            selectedValue.innerHTML = 0;
        }
    }
}

// get raitng value
function getValue() {
    //working with no eventlistener
    // ratingValue.forEach((radio) => {
    //     if (radio.checked) {
    //         console.log(radio.value);
    //         selectedValue.innerHTML = radio.value;
    //     }
    // });
    var isChecked = 0;
    for (let i = 0; i < ratingValue.length; i++) {
        const radio = ratingValue[i];
        if (radio.checked) {
            isChecked = 1;
            console.log(radio.value);
            selectedValue.innerHTML = radio.value;
            break;
        } else if (isChecked == 0) {
            //console.log(radio.value);
            selectedValue.innerHTML = 0;
        }
    }
}

// for (const f of ratingValue) {
//     if (f.checked) {
//         console.log(f?.value);
//     }
// }
