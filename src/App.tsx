import React from "react";

import "./App.css";
import { Introduction } from "./components/introduction/Introduction";

function App() {
  return (
    <div className="App">
      <main>
        <Introduction>
          <h2>iO Ghent React Starter</h2>
          <p>
            This project was bootstrapped with Create React App, specifically
            with typescript:
          </p>
          <code>
            yarn create react-app io-ghent-react-starter --template typescript
          </code>
        </Introduction>
      </main>
    </div>
  );
}

export default App;
