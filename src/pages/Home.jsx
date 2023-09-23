import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';
import Work from '../components/Work.jsx';
import Music from '../components/Music.jsx';

function Home() {
    const [navbarSelected, setNavbarSelected] = useState("");

    useEffect(() => {
        setNavbarSelected("work");

    }, []);

    return (
    <div>
        <Background>
            <div className='test'>
                <BannerImage>
                    <div className="bluPhoto" alt='Photo of me opening for Blu DeTiger'/>
                    <TitleText>
                        <h2>
                            August Eriksson
                        </h2>
                    </TitleText>
                </BannerImage>
            </div>
            <Navbar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />
            <BodyCard>
                <div className='bodyCardItems'>
                    <Work navbarSelected={navbarSelected} />
                    <Music navbarSelected={navbarSelected} />
                </div>
            </BodyCard>
        </Background>
    </div>
    )
}


const BodyCard = styled.div`
    .bodyCardItems {
        width: 40vw;
    }

    h2 {
        margin: 20px;
        font-size: 50px;
        color: #e0b6dc;
        background: none;
    }

    p {
        margin: 10px;
        font-size: 20px;
        color: pink;
        background: none;
    }
`


const TitleText = styled.div`
    h2 {
        font-size: 10vw;
        color: #e0b6dc;
        left: 0%;
        background: none;
        transform: translate(0%, 15vw);
        text-shadow: 0 0 40px rgb(25, 18, 32);
        position: absolute;
        height: 10%;
    }
`

const BannerImage = styled.div`
    * {
        width: 100%;
        position: static;
    }

    .bluPhoto {
        background-image: 
        linear-gradient(to bottom, rgba(25, 18, 32, 0), rgba(25, 18, 32, 1) 98%), 
        linear-gradient(to right, rgba(25, 18, 32, 1) 0%, rgba(25, 18, 32, 0) 40%, rgba(25, 18, 32, 0) 60%, rgba(25, 18, 32, 1) 100%),
        url('blu-photo-full.JPG');
        background-size: cover;
        height: 50vw;
        width: 500000vw;
    }
`

const Background = styled.div`
    * {
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(25, 18, 32);
        background-size: cover;
        display: flex;
        justify-content: center;
        font-family: 'Fjord One', serif;
    }

    .test {
        position: static;
    }
`

export default Home
