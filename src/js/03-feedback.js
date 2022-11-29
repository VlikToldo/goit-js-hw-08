
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}



refs.textarea.addEventListener('input', throttle(onTextareaInput, 500) );
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.form.addEventListener('submit', submitForm)

const STORAGE_KEY = "feedback-form-state";

const objectInfo = {
    email: "",
    message: "",
};

populateEmail();
populateTextarea();

function onTextareaInput (e) {

    const message = e.target.value;
    objectInfo.message = message;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectInfo));
};

function onEmailInput (e) {
    const email = e.target.value;
    objectInfo.email = email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectInfo));
};

function populateEmail () {
try {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText.email) {
        refs.email.value = savedText.email;
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


};

function populateTextarea () {
try {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText.message) {
        refs.textarea.value = savedText.message;
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


};

function submitForm (e) {
    e.preventDefault();

 
    const {
        elements: { email, message }
      } = e.currentTarget;

      const data = {
        email: email.value,
        message: message.value,
      }
      console.log(data);

      e.currentTarget.reset();
}



