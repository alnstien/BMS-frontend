import { Typography } from '@material-ui/core';
import React from 'react';
import ChartComponent, {Bar,Line,Doughnut,PolarArea,Bubble} from 'react-chartjs-2';


export default function GraphCard({type,title,data}) {

    function generateGraph(type){
        switch(type){
            case 'bar':
            return <Bar 
                type={'bar'}
                title={title}
                data={data}
            />
            case 'line':
               return <Line 
                type={'bar'}
                title={title}
                data={data}
            />
        }
    }

    return (
        <div className="d-card-wrapper">
            <Typography variant="subtitle1" >
                {title}
            </Typography>
            {
                generateGraph(type)
            }
        </div>
    )
}