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
    console.log(data)
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardAuthor = document.createElement('span');

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

    /*
    card.addEventListener('click', () => {
        console.log(data.headline)
        for(let i = 0, len = data[0].length; i < len; i++) {
            for(let j = 0, len = data[1].length; i < len; i++) {

                let card = document.createElement('div');
                let headline = document.createElement('div');
                let author = document.createElement('div');
                let imgContainer = document.createElement('div');
                let cardImg = document.createElement('img');
                let cardAuthor = document.createElement('span');
            
                card.classList.add('card');
                headline.classList.add('headline');
                author.classList.add('author');
                imgContainer.classList.add('img-container');
    
                headline.textContent = data[1][j]['headline']
                cardImg.setAttribute('src', data[1][j]['authorPhoto']);
                cardAuthor.textContent = "By " + data[1][j]['authorName'];
                console.log(cardAuthor)
                imgContainer.appendChild(cardImg);
                author.appendChild(imgContainer);
                author.appendChild(cardAuthor);
                card.appendChild(headline);
                card.appendChild(author);
            }
        }
        console.log(card);
    })*/

    return card;
}

//let cardsEntry = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((successResponse) => {
  //console.log(successResponse.data, "the data");
    successResponse.data.articles.javascript.forEach(element => {
        const cardparent = document.querySelector('.cards-container');
        cardparent.append(cardMaker(element))
    })
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


