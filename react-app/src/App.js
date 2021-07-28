import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import SplashPage from "./components/SplashPage/SplashPage";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import HomePage from "./components/HomePage/HomePage";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/home" exact={true}>
          <HomePage />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/main" exact={true} >

        </ProtectedRoute>
        <ProtectedRoute path="/single-player" exact={true}>
          <SinglePlayer />
        </ProtectedRoute>
        <ProtectedRoute path="/multiplayer-player" exact={true}>

        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
