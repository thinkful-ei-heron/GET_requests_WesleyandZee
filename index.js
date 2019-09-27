// Function to fetch information from the API

const getDogImages = function(){
  fetch('https://dog.ceo/api/breeds/image/random/')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
};



//handle function for the submit
const handleSubmitButton = function(){
  $('.submitButton').submit(function(event){
    event.preventDefault();
  });
};

// function to covert value inputted. Expecting value as string. This returns that value as a number type.
const convertValue = function(value){
  value = value.parseInt();
  return value;
};

// function to render images to the screen. 