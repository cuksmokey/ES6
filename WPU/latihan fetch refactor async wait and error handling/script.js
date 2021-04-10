const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (error) {
    // console.log(error);
    alert(error);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=4bc5d569&s=" + keyword)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((response) => {
      // console.log(response);
      if (response.Response === "False") {
        throw new Error(response.Error);
      }

      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=4bc5d569&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-3 my-3">
    <div class="card" style="width: 18rem">
      <img src="${m.Poster}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <p class="card-text">${m.Year}</p>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} - ${m.Year}</h4></li>
          <li class="list-group-item"><strong>Released : </strong>${m.Released}</li>
          <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
          <li class="list-group-item"><strong>Country : </strong>${m.Country}</li>
          <li class="list-group-item"><strong>Awards : </strong>${m.Awards}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
