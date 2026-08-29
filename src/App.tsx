import React from "react";
import "./App.css";
import img from "./assets/images/Panslonuvo_Flag.png";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{ width: "100%", height: "50px", backgroundColor: "red" }}
        >
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. -Federico Giovannitti
            </p>
            <h1>This is my header! Hello Intro to Software Engineering!</h1>
            <p>Here is my image:</p>
            <img
                src={img}
                alt="A picture of the flag of my fictional country, Panslonuvo"
            />
            <p>Heres a list of my top 3 favorite movies:</p>
            <ol>
                <li>Interstellar</li>
                <li>The Martian</li>
                <li>Soul</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
