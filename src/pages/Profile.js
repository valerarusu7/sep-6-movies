import React, { useState } from "react";
import { Paper, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const saveChanges = () => {};

  return (
    <div>
      <Paper elevation={3}>
        <div>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            style={{ marginRight: "10px" }}
          />
          <input type="file" onChange={handleImageChange} />
        </div>
        <button onClick={saveChanges}>Save changes</button>
      </Paper>
    </div>
  );
};

export default Profile;
