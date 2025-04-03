import "./App.css";
import React from 'react';
import FoodSearch from './FoodSearch'; 

function App() {
  return (
    <div className="App">
      <FoodSearch />
    </div>
  );
}

export default App;

/* 
In order to be able to deploy with github since im using react:
npm install gh-pages --save-dev

then in package.json:
  "homepage": "https://pablo-graham.github.io/Health"

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

then:
npm run deploy

*/
