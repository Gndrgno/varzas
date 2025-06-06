const closeCross = document.getElementById("close-cross");
const whatIsThis = document.getElementById("what-is-this");
const agreeDisclaimer = document.getElementById("agree-disclaimer");
const closeDisclaimer = document.getElementById("close-disclaimer");
const closeDisclaimer2 = document.getElementById("close-disclaimer2");
const disclaimerWindow = document.getElementById("disclaimer-background");


//Закрыть окно информации
closeCross.addEventListener("click", () => {
    whatIsThis.style.display = "none";
})

//Отказ от ответственности
agreeDisclaimer.addEventListener("click", () =>{
    disclaimerWindow.style.display = "none";
})
closeDisclaimer.addEventListener("click", () => {
    window.close()
})
closeDisclaimer2.addEventListener("click", () => {
    window.close()
})


