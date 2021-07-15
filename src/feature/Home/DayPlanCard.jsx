import React, {useEffect, useMemo, useRef, useState} from 'react';
import inobounce from "inobounce";

export const DayPlanCard = (props) => {

    const dragDiv = useRef()

    const [waitCardList, setWaitCardList] = useState([])
    const [movePosition, setMovePosition] = useState([0, 0]);
    const [moveStartPont, setMoveStartPont] = useState([0, 0]);

    const handleTouchStartFn = (evt) => {
        if(!evt.touches && evt.touches.length === 0) {
            return;
        }
        const { pageX, pageY } = evt.touches[0]
        setMoveStartPont([pageX, pageY]);
    }

    const  handleTouchEndFn = (evt) => {
        const {clientWidth} = document.body
        if (Math.abs(movePosition[0]) > clientWidth / 2.5) {
            removeAllListener(dragDiv);
            const last = Object.assign({}, waitCardList[waitCardList.length - 1])
            waitCardList.shift();
            waitCardList.push(props.dayCard[last.index === props.dayCard.length - 1 ? 0 : last.index + 1])
            setWaitCardList[waitCardList];
        }
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
        let temp = []
        for (let i = 0; i < 3; i ++) {
            temp.push(props.dayCard[i])
        }
        setWaitCardList(temp)
    }, [])


    const removeAllListener = (ref) => {
        if (!ref.current) {
            return;
        }
        ref.current.removeEventListener('touchstart', handleTouchStartFn);
        ref.current.removeEventListener('touchmove', handleTouchMoveFn);
        ref.current.removeEventListener('touchend', handleTouchEndFn);
    }
    const addAllListener = (ref) => {
        if (!ref.current) {
            return;
        }
        ref.current.addEventListener('touchstart', handleTouchStartFn);
        ref.current.addEventListener('touchmove', handleTouchMoveFn);
        ref.current.addEventListener('touchend', handleTouchEndFn);
    }

    useEffect(() => {
        addAllListener(dragDiv)

        return () => {
            removeAllListener(dragDiv)
        }


    }, [movePosition, waitCardList])
    return (
        <div className="card-day-plan">
            {
                waitCardList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`day-item-${(index % 3) + 1}`}
                            ref={index === 0 ?  dragDiv : null}
                            style={index === 0 ? moveStyle : {}}
                        >

                            <div>
                                <img src={ item.imgUrl } style={{ width: '100%' }} />
                                {item.title}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

