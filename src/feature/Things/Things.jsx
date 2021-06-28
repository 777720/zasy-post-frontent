import * as React from 'react';
import { useHistory } from "react-router-dom";

export const Things = () => {
    const history = useHistory();
    return (
        <div>
            thisfs
            <button onClick={() => { history.push('/') }}>返回</button>
        </div>
    )
}
