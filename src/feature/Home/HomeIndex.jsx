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
                <div>
                    <img src={require('')}/>
                </div>
                <div></div>
            </div>
        </div>
    );
};
