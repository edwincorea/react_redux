import _ from "lodash";
import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";

//class based component or just a functional component?
//It's gonna be just some props in, we choose functional component for chart.

function average(data){
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
};