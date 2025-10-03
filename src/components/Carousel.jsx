import React, {useState} from 'react';
import styled from 'styled-components';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({items}) => {

    const [indicatorIndex, setIndicatorIndex] = useState(0);

    const updateIndicatorIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setIndicatorIndex(newIndex);
    }

    return (
        <CarouselDiv>
            <div className='carousel'>
                <div className='inner' style={{ transform: `translate(-${indicatorIndex * 100}%)` }}>
                    {items.map((item) => {
                        return <CarouselItem item={item} />;
                    })}
                </div>

                <div className='carousel-buttons'>
                    <button onClick={() => {updateIndicatorIndex(indicatorIndex - 1)}} className="button-arrow">
                        <span className='material-symbols-outlined'>arrow_back_ios</span>
                    </button>

                    <div className='carousel-indicators'>
                        {items.map((item, i) => {
                            return (
                                <button onClick={() => {updateIndicatorIndex(i)}} className='indicator-buttons'>
                                    <span className={`material-symbols-outlined ${indicatorIndex === i ? 'indicator-symbol-active' : 'indicator-symbol'}`}>
                                        radio_button_checked
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <button onClick={() => {updateIndicatorIndex(indicatorIndex + 1)}} className="button-arrow">
                        <span className='material-symbols-outlined'>arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        </CarouselDiv>
    )
}


const CarouselDiv = styled.div`
    .carousel {
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .inner {
        white-space: nowrap;
        transition: transform 0.3s;
        display: flex;
        justify-content: flex-start;
    }

    .carousel-buttons {
        display: flex;
        justify-content: space-evenly;
    }

    .button-arrow {
        background: none;
        border: none;
        cursor: pointer;
        margin-top: 20px;
        color: rgb(180, 160, 160);
    }

    .carousel-indicators {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }

    .indicator-buttons {
        border: none;
        cursor: pointer;
    }

    .indicators > button {
        margin: 5px;
        background: none;
    }

    .indicator-symbol {
        color: #26343f;
    }

    .indicator-symbol-active {
        color: rgb(180, 160, 160);
    }
`


export default Carousel;
