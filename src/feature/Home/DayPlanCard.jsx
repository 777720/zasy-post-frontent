import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import inobounce from "inobounce";

export const DayPlanCard = () => {

    const dragDiv = useRef()

    let currentLeft = 0
    const [startDivPosition, setStartDivPosition] = useState([]);

    const [movePosition, setMovePosition] = useState([0, 0]);
    const [startPositionX, setStartPositionX] = useState(0)

    const handleTouchStartFn = (evt) => {
        if(!evt.touches && evt.touches.length === 0) {
            return;
        }
        const { pageX, pageY } = evt.touches[0]
        const { offsetLeft, offsetTop } = dragDiv.current;
        setStartDivPosition([offsetLeft, offsetTop])
        setStartPositionX(pageX);
    }
    const  handleTouchMoveFn = (evt) => {
        evt.preventDefault();
        if(!evt.touches && evt.touches.length === 0) {
            return;
        }
        const { pageX, pageY } = evt.touches[0]
        const moveX = pageX - startPositionX;

        if (Math.abs(moveX) > 0) {
            setMovePosition([moveX, 0]);
        }
    }

    const startCardPositionCpt = useMemo(() => {
        console.log(`${startDivPosition[0]} + ${movePosition[0]} = ${startDivPosition[0] + movePosition[0]}`)
        return  `${startDivPosition[0] + movePosition[0]}px`;
    }, [startDivPosition, movePosition])


    useEffect(() => {
        console.log('dragDiv', dragDiv)
        const { offsetLeft, offsetTop } = dragDiv.current;
        setStartDivPosition([offsetLeft, offsetTop])
        currentLeft = offsetLeft
    }, [])

    useEffect(() => {
        dragDiv.current.addEventListener('touchstart', handleTouchStartFn);
        dragDiv.current.addEventListener('touchmove', handleTouchMoveFn);

        return () => {
            dragDiv.current.removeEventListener('touchstart', handleTouchStartFn);
            dragDiv.current.removeEventListener('touchmove', handleTouchMoveFn);
        }


    }, [startPositionX, movePosition])
    return (
        <div className="card-day-plan">
            <div className="day-item-one" ref={dragDiv} style={{left: `${startCardPositionCpt}`}}>
                { movePosition.join(',') }
            </div>
            {/*<div className="day-item-two">2</div>*/}
            {/*<div className="day-item-three">3</div>*/}
        </div>
    )
}

