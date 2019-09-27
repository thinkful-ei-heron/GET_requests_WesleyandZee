// Function to fetch information from the API

function getDogImages() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('sorry this did not work'));
}

//handle function for the submit
function handleSubmitButton() {
  $('.submitButton').submit(function(event) {
    event.preventDefault();
    getDogImages();
  });
}

// function to covert value inputted. Expecting value as string. This returns that value as a number type.
function convertValue(value) {
  value = value.parseInt();
  return value;
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message} class="results-img">`
  );

  $('.results').removeClass('hidden');
}

$(function() {
  console.log('app loaded! waiting for submit!');
  handleSubmitButton();
});
