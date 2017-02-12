import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temperatures} color="red" />
                </td>
                <td>
                    <Chart data={humidities} color="green" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" />
                </td>                
            </tr>
        );
    }

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
                    {this.props.weather.map(this.renderWeather)}
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
