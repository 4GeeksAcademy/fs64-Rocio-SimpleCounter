import React, { useState, useEffect } from 'react';

const SimpleCounter = () => {
    const [counterState, setCounterState] = useState(0);
    const [dos, setDos] = useState(0);
    const [tres, setTres] = useState(0);
    const [cuatro, setCuatro] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let newCounterState = counterState + 1;
            let newDos = dos;
            let newTres = tres;
            let newCuatro = cuatro;
            if (newCounterState === 10) {
                newCounterState = 0
                newDos++

            }
            if (newDos === 10) {
                newDos = 0
                newTres++

            }
            if (newTres === 10) {
                newTres = 0
                newCuatro++

            }

            setCounterState((prev) => (prev + 1) % 10);
            if (newCounterState === 0) {
                setDos((prevdos) => (prevdos + 1) % 10);
                if (newDos === 0) {
                    setTres((prevtres) => (prevtres + 1) % 10)
                    if (newTres === 0) {
                        setCuatro((prevcuatro) => (prevcuatro + 1) % 10)
                    }
                }


            }

        }, 100);

        return () => clearInterval(interval);


    }, [counterState, dos, tres, cuatro])


    return (

        <div className="container">
            <div className="bigCounter">
                <div className="calendario">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="cuatro">{cuatro}</div>
                <div className="tres">{tres}</div>
                <div className="dos">{dos}</div>
                <div className="uno">{counterState}</div>
            </div>
        </div>)

}

export default SimpleCounter;