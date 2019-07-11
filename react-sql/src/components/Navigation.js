import React from "react";
import { NavLink } from 'react-router-dom'; 
import './components.css';


const Navigation = () => {
  return (
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/profile">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/team">Team</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/stats">Stats</a>
  </li>
</ul>
  );
};

export default Navigation;