// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardMaker = (data) => {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardAuthor = document.createElement('span');
    let thisHeadline = document.querySelector('.tab');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    cardImg.setAttribute('src', data['authorPhoto']);
    cardAuthor.textContent = "By " + data['authorName'];

    imgContainer.appendChild(cardImg);
    author.appendChild(imgContainer);
    author.appendChild(cardAuthor);
    card.appendChild(headline);
    card.appendChild(author);
    
    card.addEventListener('click', () => {
        console.log(headline.textContent);
        console.log(data)
    })

    return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((successResponse) => {
  //console.log(successResponse.data.articles, "the data");
  console.log(successResponse.data.articles.javascript);
  console.log(successResponse.data.articles.bootstrap);
  console.log(successResponse.data.articles.technology);
  console.log(successResponse.data.articles.jquery);
  console.log(successResponse.data.articles.node);

  console.log(successResponse.data)
  console.log(Object.entries(successResponse.data.articles['javascript']))

    successResponse.data.articles.javascript.forEach(element => {
        const cardparent = document.querySelector('.cards-container');
        cardparent.append(cardMaker(element))
    })

    /
    successResponse.data.articles.bootstrap.forEach(element => {
    const cardparent = document.querySelector('.cards-container');
    cardparent.append(cardMaker(element))
    })
    successResponse.data.articles.technology.forEach(element => {
        const cardparent = document.querySelector('.cards-container');
        cardparent.append(cardMaker(element))
    })
    successResponse.data.articles.jquery.forEach(element => {
        const cardparent = document.querySelector('.cards-container');
        cardparent.append(cardMaker(element))
    })
    successResponse.data.articles.node.forEach(element => {
        const cardparent = document.querySelector('.cards-container');
        cardparent.append(cardMaker(element))
    })
})
.catch((errorResponse) => {
  console.log('error!', errorResponse);
})
