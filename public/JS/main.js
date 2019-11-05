const reg_close = document.querySelector("#RegistrationClose");
const reg_open = document.querySelector("#UserRegistrationOpen");


let registration_closer = () => {
    const reg_close = document.querySelector("#UserRegistration_wrap");
    location.href = "/Home";
    // reg_close.style.display = "none";
}
let registration_opener = () => {
    const reg_open = document.querySelector("#UserRegistration_wrap");
    reg_open.style.display = "block";
}
reg_close.addEventListener('click', registration_closer);
reg_open.addEventListener('click', registration_opener);