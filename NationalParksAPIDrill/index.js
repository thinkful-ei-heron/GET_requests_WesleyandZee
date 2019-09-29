
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
function searchNp(searchParam,maxResults){
  let baseURL = 'https://developer.nps.gov/api/v1/parks?stateCode=';
  let limit = maxResults;
  let fullSearch = `${baseURL}${searchParam}&limit=${limit}&api_key=${APIKEY}`;
  console.log(fullSearch);
  fetch(fullSearch)
    .then(response => {
      if(response.ok){
        return response.json();
      }
    })
    .then(responseJson => responseJson.data.map(x => ({name: x.name, description: x.description, url: x.url})))
    .then(displayResults);
}


// handle render to the page
function displayResults (responseJson){
  console.log(responseJson, typeof responseJson);
  //let filteredResponse = responseJson.splice();
  for( let i = 0; i < responseJson.length; i++){
    $('#results-list').append(`
    <p>${i+1}.${responseJson[i].name}</p><br>
    <a href="">${responseJson[i].url}</a><br>
    <p>${responseJson[i].description}</p>
    `);
  }
}

$(handleSubmitButton);