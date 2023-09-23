import React from 'react';
import styled from 'styled-components';

function Bottom() {
    const linkedInLink = "https://www.linkedin.com/in/august-eriksson-7ba473263/";
    const gitHubLink = "https://github.com/eriks-son/";
    const instagramLink = "https://www.instagram.com/eriks.son/";

    return (
        <BottomDiv>
            <div>
                <a target="_blank" href={linkedInLink}>LinkedIn</a>
                <a target="_blank" href={gitHubLink}>GitHub</a>
                <a target="_blank" href={instagramLink}>Instagram</a>
            </div>
        </BottomDiv>
    )
}


const BottomDiv = styled.div`
    div {
        display: flex;
        justify-content: space-evenly;
        align-contents: center;
        padding: 50px 0 50px 0;
        background-color: #191220;
    }

    a {
        color: #e0b6dc;
        text-decoration: none;
        font-size: 20px;
    }
`


export default Bottom
