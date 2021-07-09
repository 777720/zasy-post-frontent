import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './styles/index.scss'


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

                123
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
