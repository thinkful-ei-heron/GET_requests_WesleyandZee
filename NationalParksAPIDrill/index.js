
const APIKEY = 'vQScjFAKB8HyPSbWFEcEGnnHikraa7jlOhBxtffv';
// function to handle the submit button
function handleSubmitButton(){
  $('#js-form').submit(event => {
    event.preventDefault();
    let searchParam = $('#js-search-field').val();
    let maxResults = parseInt($('#max-results-field').val());
    $('#results-list').empty();
    searchNp(searchParam,maxResults);
  });
}

// handle API request and response.
function searchNp(){
  let baseURL = 'https://developer.nps.gov/api/v1/parks?stateCode=';
  let fullSearch = `${baseURL}${searchParam}`;

}




// handle render to the page
function displayResults (){
  for( let i = 0; i < responseJson.length; i++){
    $('#results-list').append(`
    <a href="/placeholder/">placeholder</a><br>
    `);
  }
}

$(handleSubmitButton);