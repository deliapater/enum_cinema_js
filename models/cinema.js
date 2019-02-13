const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function (film_array) {
  const result = film_array.map((film) => {
    return film.title
  })
  return result;
};
