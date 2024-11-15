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
        align-items: center;
        height: 352px;
        width: 2000px;
        margin: 0 20px 0 20px;
        overflow: hidden;
        border-radius: 15px;
    }
    
    img {
        overflow: hidden;
        height: auto;
        border-radius: 15px;
    }
`
