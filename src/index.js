import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Alima from './ReactList.js';
import  Toggle from './ReactButtonToggle.js';
import Aalu from './colorDrop.js'


// import App from "./App";
import LiveText from './LiveParagraph.js'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Aalu/>
    <Alima/>
    <LiveText/>
    <br/>
    < Toggle/>
  </StrictMode>
);
