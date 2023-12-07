const profileimage = document.querySelector("#profileimage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const BtnUpdateprofile = document.querySelector("#updateBtn");


const isWizard = confirm("Are you are a wizard?");


//console.log(typeof isWizard);
console.log(isWizard);

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
}
else{
    profileimage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dursley"
    ageSpan.innerHTML = 13;
    statusSpan.innerHTML = "Tädipoeg";

}

BtnUpdateprofile.addEventListener("click", () => {
    profileimage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Lara not Crofty"
    ageSpan.innerHTML = 27;
    statusSpan.innerHTML = "Tomb Raider";

});