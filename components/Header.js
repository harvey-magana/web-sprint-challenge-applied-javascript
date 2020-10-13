// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(d, t, temp) {
    let headerContainer = document.querySelector('.header-container');
    let header = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let weather = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    date.textContent = d;
    title.textContent = t;
    weather.classList.add('temp');
    weather.textContent = temp;

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(weather);
    headerContainer.appendChild(header);

    return headerContainer;
}

Header('MARCH 28, 2020', 'Lambda Times', '98°');
