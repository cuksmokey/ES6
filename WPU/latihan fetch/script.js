// // search
// $(".search-button").on("click", function () {
//   let sid = $(".input-keyword").val();
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=4bc5d569&s=" + sid,
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });

//       $(".movie-container").html(cards);

//       // detail
//       $(".modal-detail-button").on("click", function () {
//         let id = $(this).data("imdbid");
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=4bc5d569&i=" + id,
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);

//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=4bc5d569&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // tombol detail
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      // console.log(modalDetailButton)
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=4bc5d569&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

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
