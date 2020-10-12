import React from 'react';

import Navbar from "./NavBar";
import Footer from "./Footer";
import { ExampleButton } from "./button"

import './layout.css';

const layout = ({children}) =>
  <>
    <Navbar/>
      <main>
        {children}
        <ExampleButton>New Button</ExampleButton>
      </main>
    <Footer/>
  </>;

export default layout;