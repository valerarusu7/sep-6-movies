import db from "./firebase";

export function addFavoriteMovie(user, movie, index) {
  const ref = db.ref("users/" + user.uid).child(movie.id);
  ref.set({
    index: index,
    id: movie.id,
    poster_path: movie.poster_path,
    title: movie.title,
    overview: movie.overview,
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
