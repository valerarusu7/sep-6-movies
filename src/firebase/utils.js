import db from "./firebase";
import storage from "./firebase";

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

function updateInfoDb(user, bio, url) {
  const ref = db.ref("users/" + user.uid).child("info");
  ref.set({
    bio: bio,
    image_path: url,
  });
}

export function updateInfo(user, bio, image) {
  const uploadTask = storage.ref(`images/${image.name}`.put(image));
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          updateInfoDb(user, bio, url);
        });
    }
  );
}

export function createAdditionalUserInfo(user) {
  const ref = db.ref("users/" + user.uid).child("info");
  ref.set({
    bio: "",
    image_path: user.photoURL,
  });
}
