import * as React from 'react';
import { useHistory } from 'react-router-dom'
import './styles/index.scss'


export const HomeIndex = (props) => {
    let history = useHistory();

    const onClickAddThing = () => {
        history.push('/add')
    }
    return (
        <div className='pg-home'>
            <div className='bottom-btn'>
                <div className="flex-item">
                    <img className="bottom-btn--img" src={require('../../assets/images/daojishi.png')} />
                </div>
                <div className="flex-item">
                    <img className="bottom-btn--img" src={require('../../assets/images/daojishi.png')} />
                </div>

            </div>
        </div>
    );
};
