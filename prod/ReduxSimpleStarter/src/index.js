import React from "react";
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCu9-mouQ4bZUmDrkUKzL5fae1VHs5DAXA";

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};



// Take this component's generated HTML and put it on the page 
ReactDom.render(<App />, document.querySelector(".container"));
