// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
// let state

// set event listeners 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting the form');
  //adding code to track each submission to the ingredients
    const formData = new FormData(form);
    console.log(formData.get('ingredient'));
    console.log(formData.get('quantity'));

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
