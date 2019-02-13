const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function (film_array) {
  const result = film_array.map((film) => {
    return film.title
  })
  return result;
};

Cinema.prototype.filmByTitle = function (title) {
    const film = this.films.filter(film => film.title === title);
    return film[0]

  }

Cinema.prototype.filmByGenre = function (genre) {
  const film = this.films.filter(film => film.genre === genre);
  return film[0]
  };

Cinema.prototype.filmByYear = function (year) {
  const film = this.films.filter(film => film.year === year);
  return film[0]
};


  module.exports = Cinema;
