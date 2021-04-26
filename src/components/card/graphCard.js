import { Typography } from '@material-ui/core';
import React from 'react';
import ChartComponent, {Bar,Line,Doughnut,PolarArea,Bubble} from 'react-chartjs-2';


export default function GraphCard({type,title,data}) {

    function generateGraph(){
        
    }

    return (
        <div className="d-card-wrapper">
            <Typography variant="subtitle1" >
                {title}
            </Typography>
            
        </div>
    )
}