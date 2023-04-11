const homeScoreEl = document.getElementById("home-score");
const homeScoreBtnOne = document.getElementById("home-score-btn-1");
const homeScoreBtnTwo = document.getElementById("home-score-btn-2");
const homeScoreBtnThree = document.getElementById("home-score-btn-3");

const guestScoreEl = document.getElementById("guest-score")
const guestScoreBtnOne = document.getElementById("guest-score-btn-1");
const guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
const guestScoreBtnThree = document.getElementById("guest-score-btn-3");

let homeScore = 0;
let guestScore = 0;

//Home score
function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// Guest score
function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
