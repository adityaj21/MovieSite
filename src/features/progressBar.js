import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import "./progressBar.css";


export default function ProgressBar({ progress, color }) {
    // const bgColor = "rgb(241, 255, 51)";
    return (
        
            <CircularProgressbar
                value={progress}
                text={`${progress}`}
                styles={buildStyles({
                    pathColor: `${color}`,
                    textColor: `${color }`,
                    // trailColor: `${rgb(253, 165, 0)}`,
                    // backgroundColor: `${bgColor}`,
                    textSize: '30px',
                })} />
       
    )
}
