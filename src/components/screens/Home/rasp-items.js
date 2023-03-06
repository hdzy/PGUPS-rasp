import React from "react";
import RaspItem from "./rasp-item";


const RaspItems = ({schedule, scheduleSubInfo}) => {
    let id=0;
    return (
        <div className='rasp-items-container'>
            {schedule.map((e) => <RaspItem key={id++} schedule={e} scheduleSubInfo={scheduleSubInfo[id]}/> )}
        </div>
)
}

export default RaspItems;
