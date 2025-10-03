import React from 'react';
import styled from 'styled-components';

function Navbar({navbarSelected, setNavbarSelected}) {
    return (
        <NavBar>
            <div>
                <ul>
                    <li className={navbarSelected === "aviation" ? "active" : ""} onClick={() => setNavbarSelected("aviation")}>
                        <h3>Aviation</h3>
                    </li>
                    <li className={navbarSelected === "work" ? "active" : ""} onClick={() => setNavbarSelected("work")}>
                        <h3>Work</h3>
                    </li>
                    <li className={navbarSelected === "music" ? "active" : ""} onClick={() => setNavbarSelected("music")}>
                        <h3>Music</h3>
                    </li>
                </ul>
            </div>
        </NavBar>
    )
}


const NavBar = styled.div`
    h3 {
        font-size: 3.7vw;
        color: rgb(235, 210, 200);
        background: none;
        font: bold;
    }

    .active {
        background-color: rgba(150, 40, 50, 1);
    }
    
    li {
        border-radius: 15px;
    }

    li:hover {
        cursor: pointer;
        background-color: rgba(200, 60, 70, 1);
    }
`


export default Navbar
