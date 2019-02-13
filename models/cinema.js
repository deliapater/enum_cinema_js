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

Cinema.prototype.filmsByYear = function (year) {
  const films = this.films.filter(film => film.year === year);
  if (films.length > 0) {
  return true}
  else {
    return false
  }

};

Cinema.prototype.filmsLength = function (length) {
  const films = this.films.every(film => film >= film.length);
  return true
};

Cinema.prototype.timeTotal = function () {
  const total = film.length.reduce((runningTotal, film) => {
    return runningTotal += film.length;
  })
  return total
};
  module.exports = Cinema;
