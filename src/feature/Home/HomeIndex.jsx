import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {DayPlanCard} from "./DayPlanCard";
import './styles/index.scss'
import {randomNum} from "@/utils";



export const HomeIndex = (props) => {
    let history = useHistory();

    const [currentTab, setCurrentTab] = useState(1);

    const onClickTabFn = (tabIndex) => {
        setCurrentTab(tabIndex)
    }

    const onClickAddThing = () => {
        history.push('/add')
    }
    return (
        <div className='pg-home'>
            <div className="home-container">
                <DayPlanCard
                    dayCard={[
                        {id: 1, title: 'test1', index: 0, imgUrl: require('@/assets/images/range/range-1.jpeg')},
                        {id: 2, title: 'test2', index: 1, imgUrl: require(`@/assets/images/range/range-2.jpeg`)},
                        {id: 3, title: 'test3', index: 2, imgUrl: require(`@/assets/images/range/range-3.jpeg`)},
                        {id: 4, title: 'test4', index: 3, imgUrl: require(`@/assets/images/range/range-4.jpeg`)},
                        {id: 5, title: 'test5', index: 4, imgUrl: require(`@/assets/images/range/range-0.jpeg`)}
                    ]}
                />
            </div>
            <div className='bottom-btn'>
                <div className={ `flex-item${currentTab === 1 ? '--click' : ''}` } onClick={() => { onClickTabFn(1) }}>
                    <img  src={require('../../assets/images/daojishi.png')} />
                </div>
                <div className={ `flex-item${currentTab === 2 ? '--click' : ''}` } onClick={() => { onClickTabFn(2) }}>
                    <img  src={require('../../assets/images/daojishi.png')} />
                </div>
            </div>
        </div>
    );
};
