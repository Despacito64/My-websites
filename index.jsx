//1. Create a root

import {createRoot} from "react-dom/client"
//since in react we are going to be rendering all of our markup using react inside of one js file we need one central location where we can insert all the content
// the div with the id- root is going to be like the root of our app
const root=createRoot(document.getElementById("root"))

//2. Render some markup to some root
root.render()