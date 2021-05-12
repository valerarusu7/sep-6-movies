import db from "./firebase";

export function addFavoriteMovie(user, movie, index) {
  const ref = db.ref("users/" + user.uid).child(movie.id);
  ref.set({
    index: index,
    id: movie.id,
    poster_path: movie.poster_path,
    title: movie.title,
    vote_average: movie.vote_average,
    year: movie.release_date
      ? movie.release_date.substring(0, 4)
      : movie.first_air_date
      ? movie.first_air_date.substring(0, 4)
      : "Unknown",
  });
}

export function removeFavoriteMovie(user, movie) {
  const ref = db.ref("users/" + user.uid).child(movie.id);
  ref.remove();
}

export function updateOrderMovie(user, movie) {
  const ref = db
    .ref("users/" + user.uid)
    .child(movie.id)
    .child("index");
  ref.set(movie.index);
}
