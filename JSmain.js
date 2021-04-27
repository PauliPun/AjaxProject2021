//Selectors
var input = document.querySelector(".inputBox");
var searchButton = document.querySelector(".searchButton");
var allButton = document.querySelector(".allButton");
var scoreButton = document.querySelector(".scoreButton");
var plotButton = document.querySelector(".plotButton");
var results = document.querySelector(".resultsContainer");
var option = document.querySelector(".optionlist");

//Listeners
allButton.addEventListener("click", addItem);
scoreButton.addEventListener("click", review);
plotButton.addEventListener("click", plot);
option.addEventListener("click", chooseDirect);
searchButton.addEventListener("click", inputSearch);

// Loads all movies when user loads the page
addItem();

//FUNCTION FOR SEARCH

function inputSearch(e) {
  e.preventDefault();
  results.innerHTML = "";

  //fetch information
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      //text is parsed and then saved into variable
      var movie = JSON.parse(data);
      // For loop goes through all the data
      for (var i = 0; i < movie.length; i++) {
        // if the title includes the user input, the results are shown
        if (movie[i].title.toLowerCase().includes(input.value)) {
          // Cards are created based on data that developer wants to show to the user
          var card = document.createElement("div");
          card.classList.add("card");
          // Title 1
          var header = document.createElement("H2");
          var headerText = document.createTextNode(movie[i].title);
          card.appendChild(header);
          header.appendChild(headerText);
          // Title 2
          var headerTwo = document.createElement("H4");
          var headerTextTwo = document.createTextNode(movie[i].original_title);
          card.appendChild(headerTwo);
          headerTwo.appendChild(headerTextTwo);
          // Director
          var direct = document.createElement("P");
          direct.innerHTML = "<strong>Director:</strong> " + movie[i].director;
          card.appendChild(direct);
          //Year
          var year = document.createElement("P");
          year.innerHTML = "<strong>Year:</strong> " + movie[i].release_date;
          card.appendChild(year);
          //Score
          var score = document.createElement("P");
          score.innerHTML =
            "<strong>Review Score:</strong> " + movie[i].rt_score;
          card.appendChild(score);
          // card is appended to resultsContainer Div
          results.appendChild(card);
        }
      }
      // input box is emptied
      input.value = "";
    });
}

// FUNCTIONS FOR BUTTONS & DROP-DOWN

// creates a card to which fetch fetches information
//ALL MOVIES
function addItem() {
  results.innerHTML = "";
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      var movie = JSON.parse(data);
      for (var i = 0; i < movie.length; i++) {
        var card = document.createElement("div");
        card.classList.add("card");
        // Title 1
        var header = document.createElement("H2");
        var headerText = document.createTextNode(movie[i].title);
        card.appendChild(header);
        header.appendChild(headerText);
        // Title 2
        var headerTwo = document.createElement("H4");
        var headerTextTwo = document.createTextNode(movie[i].original_title);
        card.appendChild(headerTwo);
        headerTwo.appendChild(headerTextTwo);
        // Director
        var direct = document.createElement("P");
        direct.innerHTML = "<strong>Director:</strong> " + movie[i].director;
        card.appendChild(direct);
        //Year
        var year = document.createElement("P");
        year.innerHTML = "<strong>Year:</strong> " + movie[i].release_date;
        card.appendChild(year);
        //Score
        var score = document.createElement("P");
        score.innerHTML = "<strong>Review Score:</strong> " + movie[i].rt_score;
        card.appendChild(score);
        // card is appended to resultsContainer Div
        results.appendChild(card);
      }
    });
}

// BEST REVIEWED
function review() {
  results.innerHTML = "";
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      var movie = JSON.parse(data);
      for (var i = 0; i < movie.length; i++) {
        // If score is 95 or better, information is shown
        if (movie[i].rt_score >= 95) {
          var card = document.createElement("div");
          card.classList.add("card");
          // Title 1
          var header = document.createElement("H2");
          var headerText = document.createTextNode(movie[i].title);
          card.appendChild(header);
          header.appendChild(headerText);
          // Title 2
          var headerTwo = document.createElement("H4");
          var headerTextTwo = document.createTextNode(movie[i].original_title);
          card.appendChild(headerTwo);
          headerTwo.appendChild(headerTextTwo);
          // Director
          var direct = document.createElement("P");
          direct.innerHTML = "<strong>Director:</strong> " + movie[i].director;
          card.appendChild(direct);
          //Year
          var year = document.createElement("P");
          year.innerHTML = "<strong>Year:</strong> " + movie[i].release_date;
          card.appendChild(year);
          //Score
          var score = document.createElement("P");
          score.innerHTML =
            "<strong>Review Score:</strong> " + movie[i].rt_score;
          card.appendChild(score);
          // card is appended to resultsContainer Div
          results.appendChild(card);
        }
      }
    });
}

// MOVIE PLOTS
function plot() {
  results.innerHTML = "";
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      var movie = JSON.parse(data);
      for (var i = 0; i < movie.length; i++) {
        var card = document.createElement("div");
        card.classList.add("plotcard");
        // Title 1
        var header = document.createElement("H2");
        var headerText = document.createTextNode(movie[i].title);
        card.appendChild(header);
        header.appendChild(headerText);
        // Title 2
        var headerTwo = document.createElement("H4");
        var headerTextTwo = document.createTextNode(movie[i].original_title);
        card.appendChild(headerTwo);
        headerTwo.appendChild(headerTextTwo);
        // Description
        const newContent = document.createTextNode(movie[i].description);
        card.appendChild(newContent);
        // card is appended to resultsContainer Div
        results.appendChild(card);
      }
    });
}

// DROP-DOWN FOR CHOOSING DIRECTOR
function chooseDirect() {
  results.innerHTML = "";
  // if director is Miyazaki
  if (option.value == "miyazaki") {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        var movie = JSON.parse(data);
        for (var i = 0; i < movie.length; i++) {
          if (movie[i].director === "Hayao Miyazaki") {
            var card = document.createElement("div");
            card.classList.add("card");
            // Title 1
            var header = document.createElement("H2");
            var headerText = document.createTextNode(movie[i].title);
            card.appendChild(header);
            header.appendChild(headerText);
            // Title 2
            var headerTwo = document.createElement("H4");
            var headerTextTwo = document.createTextNode(
              movie[i].original_title
            );
            card.appendChild(headerTwo);
            headerTwo.appendChild(headerTextTwo);
            // Director
            var direct = document.createElement("P");
            direct.innerHTML =
              "<strong>Director:</strong> " + movie[i].director;
            card.appendChild(direct);
            //Year
            var year = document.createElement("P");
            year.innerHTML = "<strong>Year:</strong> " + movie[i].release_date;
            card.appendChild(year);
            //Score
            var score = document.createElement("P");
            score.innerHTML =
              "<strong>Review Score:</strong> " + movie[i].rt_score;
            card.appendChild(score);
            // card is appended to resultsContainer Div
            results.appendChild(card);
          }
        }
      });
    //if director is Takahata
  } else if (option.value == "takahata") {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        var movie = JSON.parse(data);
        for (var i = 0; i < movie.length; i++) {
          if (movie[i].director === "Isao Takahata") {
            var card = document.createElement("div");
            card.classList.add("card");
            // Title 1
            var header = document.createElement("H2");
            var headerText = document.createTextNode(movie[i].title);
            card.appendChild(header);
            header.appendChild(headerText);
            // Title 2
            var headerTwo = document.createElement("H4");
            var headerTextTwo = document.createTextNode(
              movie[i].original_title
            );
            card.appendChild(headerTwo);
            headerTwo.appendChild(headerTextTwo);
            // Director
            var direct = document.createElement("P");
            direct.innerHTML =
              "<strong>Director:</strong> " + movie[i].director;
            card.appendChild(direct);
            //Year
            var year = document.createElement("P");
            year.innerHTML = "<strong>Year:</strong> " + movie[i].release_date;
            card.appendChild(year);
            //Score
            var score = document.createElement("P");
            score.innerHTML =
              "<strong>Review Score:</strong> " + movie[i].rt_score;
            card.appendChild(score);
            // card is appended to resultsContainer Div
            results.appendChild(card);
          }
        }
      });
  }
}
