import React, {Component} from "react";
import {connect} from "react-redux";

class WeatherList extends Component {
    render(){
        return (
            <table className="table table-hoover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>    
                <tbody>

                </tbody>
            </table>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {weather: state.weather};
// };

const mapStateToProps = ({weather}) => {
    return {weather};
};

export default connect(mapStateToProps)(WeatherList);
