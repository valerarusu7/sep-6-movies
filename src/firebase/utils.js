import db from "./firebase";

export function addFavoriteMovie(user, movie) {
  const ref = db.ref("users/" + user.uid).child(movie.id);
  ref.set({
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
