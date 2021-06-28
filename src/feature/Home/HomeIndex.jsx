import * as React from 'react';
import { useHistory } from 'react-router-dom'


export const HomeIndex = (props) => {
    let history = useHistory();

    const onClickAddThing = () => {
        history.push('/add')
    }
    return (
        <div>
            this is home
            <button onClick={onClickAddThing}>新增</button>
        </div>
    );
};
