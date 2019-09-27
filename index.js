// Function to fetch information from the API

function getDogImages(value) {
  let endPoint = 'https://dog.ceo/api/breeds/image/random/';
  console.log(endPoint + value);
  fetch(endPoint + value)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log('sorry this did not work'));
  //console.log(getDogImages);
}

//handle function for the submit
function handleSubmitButton() {
  $('form').submit(event => {
    event.preventDefault();
    let value = parseInt($('#value').val());
    console.log(typeof value);
    getDogImages(value);
    // console.log(handleSubmitButton);
  });
}

function displayResults(responseJson) {
  for( let i = 0; i < responseJson.message.length; i++){
    $('.results').append(`<img src='${responseJson.message[i]}' id="Img-holder">`);
  }
}

$(function() {
  console.log('app loaded! waiting for submit!');
  handleSubmitButton();
});
