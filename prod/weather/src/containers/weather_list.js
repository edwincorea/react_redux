import React, {Component} from "react";
import {connect} from "react-redux";
import {Sparklines, SparklinesLine} from "react-sparklines";

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
                    <Sparklines height={120} width={180} data={temperatures}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities}>
                        <SparklinesLine color="green"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressures}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
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
