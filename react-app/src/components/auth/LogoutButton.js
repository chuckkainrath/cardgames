import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/');
  };

  return <button className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
