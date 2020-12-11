let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const moviesCount = () => {
  while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

moviesCount();
let personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('Какую оценку вы бы ему поставили?', '');

    if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
      personalMoviesDB.movies[ a ] = b;
    } else {
      i--
    }
  }
}

rememberMyFilms();

function detectPersonalLevel () {
  if (personalMoviesDB.count < 10) {
    console.log('Вы смотрите фильмы довольно редко');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Обычный кинозритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Да вы киноман!');
  } else {
    console.log('Ошибка!');
  }
}

detectPersonalLevel();


function showMyDB () {
  if (personalMoviesDB.private === true) {
    console.log('Отказано в доступе');
  } else {
    console.log(personalMoviesDB);
  }
}

showMyDB();

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[ i ] = prompt(`Ваш любимый жанр № ${i}?`);

  }
  console.log(personalMoviesDB.genres);
}

writeYourGenres();