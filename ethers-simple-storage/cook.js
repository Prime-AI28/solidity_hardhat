// Setup Movie Night

//Cook popcorn
//Pour Drinks
//Start Movie

async function setupMovieNight() {
  let popcorn = cookPopcorn();
  let drinks = pourDrinks();
  let movie = startMovie();
  return Promise.all([popcorn, drinks, movie]);
}

function cookPopcorn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Popcorn is ready");
    }, 1000);
  });
}

function pourDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Drinks are ready");
    }, 1000);
  });
}

function startMovie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Movie is ready");
    }, 1000);
  });
}
var result;
setupMovieNight().then(result ="Movie Night is ready");

console.log(result);