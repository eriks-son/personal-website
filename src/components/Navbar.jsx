import React from 'react';
import styled from 'styled-components';

function Navbar({navbarSelected, setNavbarSelected}) {
    return (
        <NavBar>
            <div>
                <ul>
                    <li className={navbarSelected === "work" ? "active" : ""} onClick={() => setNavbarSelected("work")}>
                        <h3>Work</h3>
                    </li>
                    <li className={navbarSelected === "aviation" ? "active" : ""} onClick={() => setNavbarSelected("aviation")}>
                        <h3>Aviation</h3>
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
        font-size: 50px;
        color: #e0b6dc;
        background: none;
        font: bold;
    }

    .active {
        background-color: rgb(35, 28, 42);
    }

    li:hover {
        cursor: pointer;
    }
`


export default Navbar
