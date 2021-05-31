import React, { useState, useEffect } from "react";
import {
  setSavedSuccessfully,
  updateAdditionalUserInfo,
} from "../../store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Swal from "sweetalert2";

const SaveButton = ({ styles, additionalUserInfo, user, nickname, bio }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { savedSuccessfully } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const openAlert = React.useCallback(() => {
    Swal.fire({
      title: "Changes saved",
      text: "Your changes have been successfully saved.",
      type: "success",
    });
    dispatch(setSavedSuccessfully(false));
  }, [dispatch]);

  useEffect(() => {
    if (savedSuccessfully) {
      openAlert();
    }
  }, [openAlert, savedSuccessfully]);

  const handleChanges = () => {
    if (nickname === null && bio === null) {
      console.log("No save happened");
    } else if (nickname === null) {
      sendChanges(user.displayName);
    } else if (nickname.length < 3) {
      setErrorMessage("Nickname should be at least 3 characters");
    } else {
      sendChanges(nickname);
    }
  };

  const sendChanges = (name) => {
    setErrorMessage("");
    dispatch(
      updateAdditionalUserInfo(user.uid, name, bio, additionalUserInfo.color)
    );
  };
  return (
    <div className={styles.lowerContent}>
      <span className={styles.errorMessage}>{errorMessage}</span>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleChanges()}
        startIcon={<SaveIcon />}
        style={{ marginLeft: "auto" }}
      >
        Save changes
      </Button>
    </div>
  );
};

export default SaveButton;
