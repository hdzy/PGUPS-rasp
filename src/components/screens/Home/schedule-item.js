import React from "react";

const ScheduleItem = ({day, isActive, changeDay}) => {
    return (
            <p className={'day-name ' + isActive} onClick={changeDay}>{day}</p>
    )
}

export default ScheduleItem;
