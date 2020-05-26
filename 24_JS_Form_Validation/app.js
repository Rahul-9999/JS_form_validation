let registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit',function(e) {
    // prevent form submission
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    passwordsMatch();

});

// username keyup event
document.querySelector('#username').addEventListener('keyup',function() {
    checkUsername();
});

// email keyup event
document.querySelector('#email').addEventListener('keyup',function() {
    checkEmail();
});

// password keyup event
document.querySelector('#password').addEventListener('keyup',function() {
    checkPassword();
});

// confirm password keyup event
document.querySelector('#c_password').addEventListener('keyup',function() {
    checkConfirmPassword();
});

// check username
let checkUsername = () => {
    let inputField = document.querySelector('#username');
    let inputFeedback = document.querySelector('#username-feedback');
    let textEntered = inputField.value;
    let regExp = /^[a-zA-Z0-9_]{4,10}$/;
    if(regExp.test(textEntered)){
        makeValid(inputField,inputFeedback);
        return true;
    }
    else{
        makeInvalid(inputField,inputFeedback);
        return false;
    }
};

// check email
let checkEmail = () => {
    let inputField = document.querySelector('#email');
    let inputFeedback = document.querySelector('#email-feedback');
    let textEntered = inputField.value;
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(textEntered)){
        makeValid(inputField,inputFeedback);
        return true;
    }
    else{
        makeInvalid(inputField,inputFeedback);
        return  false;
    }
};

// check password
let checkPassword = () => {
    let inputField = document.querySelector('#password');
    let inputFeedback = document.querySelector('#password-feedback');
    let textEntered = inputField.value;
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(textEntered)){
        makeValid(inputField,inputFeedback);
        return true;
    }
    else{
        makeInvalid(inputField,inputFeedback);
        return  false;
    }
};

// check Confirm password
let checkConfirmPassword = () => {
    let inputField = document.querySelector('#c_password');
    let inputFeedback = document.querySelector('#c_password-feedback');
    let textEntered = inputField.value;
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(textEntered)){
        makeValid(inputField,inputFeedback);
        return true;
    }
    else{
        makeInvalid(inputField,inputFeedback);
        return  false;
    }

};

// check passwords match
let passwordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let c_passwordField = document.querySelector('#c_password');
    let c_passwordFeedback = document.querySelector('#c_password-feedback');
    if(passwordField.value !== '' && c_passwordField.value !== ''){
        if(passwordField.value !== c_passwordField.value){
            makeInvalid(c_passwordField,c_passwordFeedback);
            c_passwordFeedback.innerText = `Passwords are not Matched`;
        }
        else{
            makeValid(c_passwordField,c_passwordFeedback);
        }
    }
    else {
        makeInvalid(c_passwordField,c_passwordFeedback);
    }

};

// makeValid
let makeValid = (inputField,feedbackElement) => {
    inputField.classList.add('is-valid');
    inputField.classList.remove('is-invalid');
    feedbackElement.classList.add('valid-feedback');
    feedbackElement.classList.remove('invalid-feedback');
    feedbackElement.innerText = 'Looks Good';
};

// make Invalid
let makeInvalid = (inputField,feedbackElement) => {
    inputField.classList.add('is-invalid');
    inputField.classList.remove('is-valid');
    feedbackElement.classList.add('invalid-feedback');
    feedbackElement.classList.remove('valid-feedback');
    feedbackElement.innerText = `Invalid ${inputField.placeholder}`;
};
