// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element





let entry = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then((successResponse) => {
  //console.log(successResponse.data.topics, "the data");
  Object.values(successResponse.data.topics).forEach( (url) => {
    let newTopic = document.createElement('div');
    newTopic.classList.add('tab');
    newTopic.textContent = url;
    //console.log(newTopic)
    entry.appendChild(newTopic);
  })
})
.catch((errorResponse) => {
  console.log('error!', errorResponse);
})