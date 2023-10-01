import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';
import Work from '../components/Work.jsx';
import Music from '../components/Music.jsx';
import Aviation from '../components/Aviation.jsx';

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
                            AUGUST ERIKSSON
                        </h2>
                    </TitleText>
                </BannerImage>
            </div>
            <Navbar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />
            <BodyCard>
                <div className='bodyCardItems'>
                    <Aviation navbarSelected={navbarSelected} />
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
        width: 40%;
    }

    h2 {
        font-size: 50px;
        color: #C44F8C;
        background: none;
    }

    p {
        font-size: 20px;
        color: #e0b6dc;
        background: none;
    }

    a {
        color: #8392E7;
        text-decoration: none;
        font-size: 20px;
        font-style: italic;
    }

    /* Smartphones */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        .bodyCardItems {
            width: 80%;
        }

        h2 {
            font-size: 40px;
        }
    
        p {
            font-size: 20px;
        }
    }
    
    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        .bodyCardItems {
            width: 70%;
        }

        h2 {
            font-size: 40px;
        }
    
        p {
            font-size: 23px;
        }
    }
`


const TitleText = styled.div`
    h2 {
        font-size: 8vw;
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
        font-family: 'Montserrat', sans-serif;
    }

    .test {
        position: static;
    }
`

export default Home
