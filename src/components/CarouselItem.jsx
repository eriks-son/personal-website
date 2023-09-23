import React from "react";
import styled from 'styled-components';
import Parser from "html-react-parser";

export const CarouselItem = ({item}) => {
    return (
        <CarouselItemDiv>
            <div className="carousel-item-individual">
                {Parser(item)}
            </div>
        </CarouselItemDiv>
    )
}


const CarouselItemDiv = styled.div`
    .carousel-item-individual {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 352px;
        width: 2000px;
        padding: 0 20px 0 20px;
    }
`
