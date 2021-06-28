import * as React from 'react';
import { useHistory } from "react-router-dom";

export const Things = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => { history.push('/') }}>返回</button>
            <h1>
                todo list
            </h1>
            <div className="p-6">123</div>
        </div>
    )
}
