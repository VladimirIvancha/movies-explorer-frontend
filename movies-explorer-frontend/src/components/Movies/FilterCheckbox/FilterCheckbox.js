import React, { useState, useEffect, useContext, memo } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function FilterCheckbox({
    isOpen,
    onUpdateUser,
    onShortMoviesFilter,
    isSubmitInLoading,
    isSubmitSuccess,
  }) {
    const currentUser = useContext(CurrentUserContext);
  
    const [userName, setUserName] = useState("");
    const [userAbout, setUserAbout] = useState("");
    const [errorInputName, setErrorInputName] = useState({
      isValid: true,
      errorMessage: "",
    });
    const [errorInputAbout, setErrorInputAbout] = useState({
      isValid: true,
      errorMessage: "",
    });
    const [isUserUseInputName, setIsUserUseInputName] = useState(false);
    const [isUserUseInputAbout, setIsUserUseInputAbout] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
  
    useEffect(() => {
      setUserName(currentUser.name);
      setUserAbout(currentUser.about);
    }, [currentUser, isOpen]);
  
    useEffect(() => {
      setIsUserUseInputName(false);
      setIsUserUseInputAbout(false);
      setErrorInputName({
        isValid: true,
        errorMessage: "",
      });
      setErrorInputAbout({
        isValid: true,
        errorMessage: "",
      });
    }, [isOpen]);
  
    useEffect(() => {
      if (isSubmitSuccess) {
        setErrorInputName({ isValid: false, errorMessage: "" });
        setErrorInputAbout({ isValid: false, errorMessage: "" });
      }
    }, [isSubmitSuccess]);
  
    useEffect(() => {
      setCanSubmit(errorInputName.isValid && errorInputAbout.isValid);
    }, [errorInputName, errorInputAbout]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      onUpdateUser({
        name: userName,
        about: userAbout,
      });
  
      setIsUserUseInputName(false);
      setIsUserUseInputAbout(false);
    }
  
    function handleOnChangeInputName(e) {
      setUserName(e.target.value);
      setIsUserUseInputName(true);
      setErrorInputName({
        isValid: e.target.validity.valid,
        errorMessage: e.target.validationMessage,
      });
    }
  
    function handleOnChangeInputAbout(e) {
      setUserAbout(e.target.value);
      setIsUserUseInputAbout(true);
      setErrorInputAbout({
        isValid: e.target.validity.valid,
        errorMessage: e.target.validationMessage,
      });
    }
  
    return (
        <div className="filtercheckbox">
            <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes" onClick={() => onShortMoviesFilter()}/>
            <label htmlFor="happy"><p className="custom-checkbox-text">Короткометражки</p></label>
        </div>
    );
  }

export default memo(FilterCheckbox);