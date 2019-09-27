// Function to fetch information from the API

function getDogImages(breed) {
  let endPoint = `https://dog.ceo/api/breed/${breed}/images/random`;
  console.log(typeof breed);
  fetch(endPoint)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('sorry breed not found'));
  //console.log(getDogImages);
}

//handle function for the submit
function handleSubmitButton() {
  $('form').submit(event => {
    event.preventDefault();
    let value = $('#value').val();
    console.log(typeof value);
    getDogImages(value);
    // console.log(handleSubmitButton);
  });
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  if (
    responseJson.message === 'Breed not found (master breed does not exist)'
  ) {
    alert('breed not found');
  }
  $('.results').append(`<img src='${responseJson.message}' id="Img-holder">`);
}

$(function() {
  console.log('app loaded! waiting for submit!');
  handleSubmitButton();
});
