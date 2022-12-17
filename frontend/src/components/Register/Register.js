import React, { useEffect } from "react";
import * as Components from "./Components";
import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { login, fetchUserByEmail, register } from "../../redux/actions/userActions";

function Register({toast}) {
  const [signIn, toggle] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [reg, setReg] = React.useState(false);
  const [log, setLog] = React.useState(false);

  const dispatch = useDispatch();

  const registered = useSelector((state) => state.userRegistered);
  const loggedin = useSelector((state) => state.userLogged);
  const emailCheck = useSelector((state) => state.emailUser.user);

  useEffect(() => {
    if(reg) {
  localStorage.setItem("user", JSON.stringify(registered.user));
  window.location.href = "/"
    }
    if(log) {
  localStorage.setItem("user", JSON.stringify(loggedin.user));
  window.location.href = "/"
    }
  }, [reg, log]);

  useEffect(() => {
    dispatch(fetchUserByEmail(email))
  }, [email])
  
  useEffect(() => {
    if(registered.success === true){setReg(true)}
  }, [registered]);
  useEffect(() => {
    if (loggedin.success === true) {
      setLog(true);
    }
  }, [loggedin]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (emailCheck === null) {
      if(email !== "") {

        if (password !== "") {
          if (firstName !== "") {
            if (lastName !== "") {
              await dispatch(
                register({
                  email,
                  password,
                  firstName,
                  lastName,
                })
              );
            } else {
              toast.error("Last Name is Required!");
            }
          } else {
            toast.error("First Name is Required!");
          }
        } else {
          toast.error("Password is Required!");
        }
      } else{
        toast.error("Email is Required!")
      }
} else{
  toast.error("Email already Registered!")
}
  }

    const handleLogin = async (e) => {
      e.preventDefault();
      if (emailCheck !== null) {
        
      if (email !== "") {
        if (password !== "") {
          await dispatch(
            login({
              email,
              password,
            })
          );
        } else {
          toast.error("Password Is Required!");
        }
      } else {
        toast.error("Email Is Required!");
      }
      } else {
        toast.error("No user found")
      }
    };

  return (
    <div className="register-body">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleRegister}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
            />
            <Components.Input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Last Name"
            />
            <Components.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Components.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Components.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Register;