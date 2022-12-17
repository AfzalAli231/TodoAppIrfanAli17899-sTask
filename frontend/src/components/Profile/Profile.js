import * as Components from "../Register/Components";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import {updateUser} from "../../redux/actions/userActions"

const Profile = () => {
  const [profileFirstName, setProfileFirstName] = useState("");
  const [profileLastName, setProfileLastName] = useState("");
  const [signIn, setSignIn] = React.useState(true);
      const res = JSON.parse(localStorage.getItem("user"));
  const profileImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const [profileEmail, setProfileEmail] = useState("");
  const [profilePassword, setprofilePassword] = useState("");
    const dispatch = useDispatch();
    const newData = useSelector(state => state.updatedUser.user)

    
  const handleUpdate = async(e) => {
    e.preventDefault();
    await dispatch(
      updateUser(res._id, {
        firstName: profileFirstName,
        lastName: profileLastName,
        email: profileEmail,
        password: profilePassword,
      })
    );

    setTimeout(() => {
       setSignIn(false);
    }, 1000);
  }
  const profileData = async () => {
    try {
      setProfileEmail(res.email);
      setProfileFirstName(`${res.firstName}`);
      setProfileLastName(`${res.lastName}`);
      setprofilePassword(res.password)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(signIn === false) {
    localStorage.removeItem("user");
    setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(newData))
    }, 1000);
    setTimeout(() => {
        window.location.href = "/profile"
    }, 1500);
    }
  }, [!signIn])

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div className="register-body">
      <div className="card">
        <img src={profileImage} style={{ width: "100%" }} />
        <h1 style={{ textTransform: "capitalize", fontSize: "2rem" }}>
          {profileFirstName} {profileLastName}
        </h1>
        <p className="title">{profileEmail}</p>
      </div>
      <Components.Container>
        <img src={profileImage} alt="" style={{width: "50%", height: "100%"}} />
        <Components.SignUpContainer update={signIn}>
          <Components.Form onSubmit={handleUpdate}>
            <Components.Title>Update Account</Components.Title>
            <Components.Input
              type="text"
              value={profileFirstName}
              onChange={(e) => setProfileFirstName(e.target.value)}
              placeholder="First Name"
              style={{width: "100%"}}
            />
            <Components.Input
              type="text"
              value={profileLastName}
              onChange={(e) => setProfileLastName(e.target.value)}
              placeholder="Last Name"
            />
            <Components.Input
              type="email"
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
              placeholder="Email"
            />
            <Components.Input
              type="password"
              value={profilePassword}
              onChange={(e) => setprofilePassword(e.target.value)}
              placeholder="Password"
            />
            <Components.Button type="submit">Update</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
      </Components.Container>
    </div>
  );
};

export default Profile;
