let elBody = document.body;
let elMovieList = document.querySelector(".movie__list");
let elLink = "https://www.youtube.com/watch?v=";



for (let movie of movies) {



     // CREATE
     let movieItem = document.createElement("li");
     let movieImg = document.createElement("img");
     let movieTitle = document.createElement("h4");
     let movieYear = document.createElement("p");
     let moviePanel = document.createElement("div");

     // CREATE MOVIE-PANEL
     let moviePanelBtn = document.createElement("button");
     let moviePanelBox = document.createElement("div")
     let moviePanelBox3 = document.createElement("div")
     let moviePanelImg = document.createElement("img");
     let moviePanelBox2 = document.createElement("div");
     let moviePanelTitle = document.createElement("h4");
     let moviePanelReting = document.createElement("p");
     let moviePanelLink = document.createElement("a");
     let moviePanelInfo = document.createElement("p");
     let movieOver = document.createElement("div");

     //SetAttribute
     movieItem.setAttribute("class", "movie__item");
     movieImg.setAttribute("class", "movie__img");
     movieImg.style.width = "200";
     movieImg.style.height = "200";
     movieImg.setAttribute("src", movie.bigThumbnail);
     movieTitle.setAttribute("class", "movie__item--header");
     movieYear.setAttribute("class", "movie__item--year");

     // SET ATTRIBUTE MOVIE-PANEL
     moviePanel.setAttribute("class", "movie__panel");
     moviePanelBtn.setAttribute("class", "close-btn");
     moviePanelImg.setAttribute("class", "movie__panel-img");
     moviePanelImg.setAttribute("src", movie.bigThumbnail);
     moviePanelBox2.setAttribute("class", "movie__panel-box2");
     moviePanelTitle.setAttribute("class", "movie__panel-header");
     moviePanelReting.setAttribute("class", "movie__reting");
     moviePanelLink.setAttribute("class", "movie__link");
     moviePanelLink.setAttribute("href", elLink + movie.youtubeId);
     moviePanelInfo.setAttribute("class", "info");
     moviePanelBox.setAttribute("class", "movie__panel-box");
     moviePanelBox3.setAttribute("class", "movie__panel-box3");
     movieOver.setAttribute("class", "movie__over");

     //TEXT CONTENT
     movieTitle.textContent = movie.title.slice(0, 10);
     movieYear.textContent = movie.year;
     moviePanelTitle.textContent = movie.title.slice(0, 20);
     moviePanelReting.textContent = movie.imdbRating;
     moviePanelInfo.textContent = movie.summary;
     moviePanelLink.textContent = "Play Trailer";


     //APPEND
     elMovieList.appendChild(movieItem);
     movieItem.appendChild(movieImg);
     movieItem.appendChild(movieTitle);
     movieItem.appendChild(movieYear);
     elBody.appendChild(movieOver);

     // APPEND MOVIE-PANEL
     movieOver.appendChild(moviePanel);
     moviePanel.appendChild(moviePanelBtn);
     moviePanel.appendChild(moviePanelBox);
     moviePanelBox.appendChild(moviePanelImg);
     moviePanelBox.appendChild(moviePanelBox2);
     moviePanelBox2.appendChild(moviePanelTitle);
     moviePanelBox2.appendChild(moviePanelBox3);
     moviePanelBox3.appendChild(moviePanelReting);
     moviePanelBox3.appendChild(moviePanelLink);
     moviePanel.appendChild(moviePanelInfo);


     movieItem.addEventListener("click", function (evt) {
          evt.preventDefault
          movieOver.style.display = "inline";
     })

     moviePanelBtn.onclick = function () {
          movieOver.style.display = "none";
     }

     window.onclick = function (e) {

          movieOver.style.display = "none";

     }
}