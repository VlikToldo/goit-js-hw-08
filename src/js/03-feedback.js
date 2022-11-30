
import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector('.feedback-form'),
  };

  const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input',throttle(onInputForm,500));
refs.form.addEventListener('submit', submitForm);
window.addEventListener('load', updateOutputOnload);

function onInputForm(e) {
    e.preventDefault();
    const message = refs.form.elements.message.value;
    const email = refs.form.elements.email.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ message, email }));
    
   }

function updateOutputOnload(e) {
   e.preventDefault();
   const outputTextContent = localStorage.getItem(STORAGE_KEY);
   const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
   const { email, message } = outputObjectContent;
   refs.form.elements.email.value = email;
   refs.form.elements.message.value = message;
 }

function submitForm (e) {
    e.preventDefault();

    const {
        elements: { email, message }
      } = e.currentTarget;

      
    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
      }

      const data = {
        email: email.value,
        message: message.value,
      }
      console.log(data);
      localStorage.clear();
      e.currentTarget.reset();
}


// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500) );
// refs.email.addEventListener('input', throttle(onEmailInput, 500));
// refs.form.addEventListener('submit', submitForm)

// const STORAGE_KEY = "feedback-form-state";

// const objectInfo = {};

// populateEmail();
// populateTextarea();

// function onTextareaInput (e) {

//     const message = e.target.value;
//     objectInfo[e.target.name] = message;

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(objectInfo));
// };

// function onEmailInput (e) {
//     const email = e.target.value;
//     objectInfo[e.target.name] = email;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(objectInfo));
// };

// function populateEmail () {

//     const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     if (savedText.email) {
//         refs.email.value = savedText.email;
//     }

// };

// function populateTextarea () {

//     const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     if (savedText.message) {
//         console.log();
//         const arraySavedText = Object.keys(savedText);

//         refs.textarea.value = savedText.message;
//     }

// };


