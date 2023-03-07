import React, {useState} from "react";
import showMore from "../../../arrow-down.svg";


const RaspItem = ({schedule, scheduleSubInfo}) => {
    const isPractice = scheduleSubInfo[1] === 1 ? 'rasp-item-container-practice' : '';

    return (
        <div className={'rasp-item-container ' + isPractice}>
            <div className="flex-in-container" onClick={scheduleSubInfo[0] === 'Отсутствует' ? null : setActive}>
                <h1 className='rasp-item-title'>{schedule}</h1>
                <img src={showMore} alt="showMore" className='showMore-icon' style={scheduleSubInfo[0] === 'Отсутствует' ? {display: 'none'} : null}/>
            </div>
            <div className='subinfo-container'>
                <h1 className='audience-title'>Аудитория: <span className='subinfo-main'>{scheduleSubInfo[0]}</span></h1>
                <h1 className='type-title'>Тип занятия: <span className='subinfo-main'>{scheduleSubInfo[1] === 1 ? 'Практика' : 'Лекция'}</span></h1>
                <h1 className='professor-title'>Профессор: <span className='subinfo-main'>{scheduleSubInfo[2]}</span></h1>
                <h1 className='audience-title'>Время: <span className='subinfo-main'>{scheduleSubInfo[3]}</span></h1>

            </div>
        </div>
    )

    function setActive(targetElement) {
        if (targetElement.target.parentElement.parentElement.classList.contains('rasp-item-container')) {
            targetElement.target.parentElement.parentElement.classList.toggle('active-container')
        }
        else if (targetElement.target.parentElement.classList.contains('rasp-item-container')) {
            targetElement.target.parentElement.classList.toggle('active-container')
        }
        else {
            targetElement.target.classList.toggle('active-container')
        }
    }

}

export default RaspItem;
