import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import inobounce from "inobounce";

export const DayPlanCard = () => {

    const dragDiv = useRef()

    const [movePosition, setMovePosition] = useState([0, 0]);

    const [moveStartPont, setMoveStartPont] = useState([0, 0]);
    const [hasTransition, setHasTransition] = useState(false);

    const handleTouchStartFn = (evt) => {
        if(!evt.touches && evt.touches.length === 0) {
            return;
        }
        const { pageX, pageY } = evt.touches[0]
        setMoveStartPont([pageX, pageY]);
    }

    const  handleTouchEndFn = (evt) => {
        setMovePosition([0, 0])
    }
    const  handleTouchMoveFn = (evt) => {
        evt.preventDefault();
        if(!evt.touches && evt.touches.length === 0) {
            return;
        }
        const { pageX } = evt.touches[0]
        const moveX = pageX - moveStartPont[0];

        if (Math.abs(moveX) > 0) {
            setHasTransition(true);
            setMovePosition([moveX, 0]);
        }
    }

    const moveStyle = useMemo(() => {
        let opacityTemp = 1
        if (document.body) {
            const {clientWidth} = document.body
            Math.abs(movePosition[0]) >= (clientWidth / 1.5) ? setMovePosition([0, 0]) : null;
            opacityTemp = (-1.5 / clientWidth) * Math.abs(movePosition[0]) + 1
        }


        const styles = {
            transform: `translateX(${movePosition[0]}PX)`,
            opacity: opacityTemp,
            transition: 'all 0.1s',
        }
        return  styles;
    }, [movePosition])



    useEffect(() => {
        dragDiv.current.addEventListener('touchstart', handleTouchStartFn);
        dragDiv.current.addEventListener('touchmove', handleTouchMoveFn);
        dragDiv.current.addEventListener('touchend', handleTouchEndFn)

        return () => {
            dragDiv.current.removeEventListener('touchstart', handleTouchStartFn);
            dragDiv.current.removeEventListener('touchmove', handleTouchMoveFn);
            dragDiv.current.removeEventListener('touchend', handleTouchEndFn);
        }


    }, [movePosition])
    return (
        <div className="card-day-plan">
            <div className="day-item-one" ref={dragDiv} style={moveStyle}>
                { movePosition.join(',') }
            </div>
            {/*<div className="day-item-two">2</div>*/}
            {/*<div className="day-item-three">3</div>*/}
        </div>
    )
}

