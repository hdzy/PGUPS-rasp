import React, {useState} from "react";
import arrowUp from "../../../arrow-up.svg";
import ReactDOM from "react-dom";

const oddSchedule = ({weekOdd, changeOdd}) => {

    return (
        <div className={'oddFlex'}>
            <img src={arrowUp} alt="arrowUp" className={'arrowOdd'} width={'30px'} style={weekOdd === 0 ? {transform: 'rotate(180deg)'} : null} onClick={changeOdd}/>
            <p className={'oddText'}>{weekOdd === 0 ? 'Чётная' : 'Нечётная'} неделя</p>
        </div>
    )
}

export default oddSchedule;
