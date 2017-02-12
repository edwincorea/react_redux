import React from "react";
import {Sparklines, SparklinesLine} from "react-sparklines";

//class based component or just a functional component?
//It's gonna be just some props in, we choose functional component for chart.

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    );
};