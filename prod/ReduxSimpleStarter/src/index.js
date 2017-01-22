import React, {Component} from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCu9-mouQ4bZUmDrkUKzL5fae1VHs5DAXA";

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({videos});
        });        
    }

    render(){
        const firstVideo = this.state.videos[0];
        return (
            <div>
                <SearchBar />
                <VideoDetail video={firstVideo}/>
                <VideoList videos={this.state.videos} />                
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page 
ReactDom.render(<App />, document.querySelector(".container"));
