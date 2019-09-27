// Function to fetch information from the API

const getDogImages = function(){
  fetch('https://dog.ceo/api/breeds/image/random/')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => 'sorry this did not work');
};



//handle function for the submit
const handleSubmitButton = function(){
  $('.submitButton').submit(function(event){
    event.preventDefault();
    getDogImages();
  });
};

// function to covert value inputted. Expecting value as string. This returns that value as a number type.
const convertValue = function(value){
  value = value.parseInt();
  return value;
};

// function to render images to the screen. 
const displayResults = function(responseJson){
  console.log(responseJson);
  $('.results').replaceWith(
    `img src="${responseJson.message} class ="results-img>`);
  $('.results').removeClass('hidden');
};

$(function(){
  console.log('app loaded! waiting for submit!');
  handleSubmitButton();
});
