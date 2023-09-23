import React from 'react';
import styled from 'styled-components';

function Aviation({navbarSelected}) {
    const vatsimLink = "https://vatsim.net/";
    const nyartccLink = "https://nyartcc.org/";

    if (navbarSelected === "aviation") return (
        <AviationInfo>
            <div className='items'>
                <h2>How It Started</h2>
                <p>
                    I was always interested in planes since I was a kid, especially the legos. My passion truly started in High School
                    and I was able to take flight lessons in a Cessna 172 at my local airport until the beginning of the pandemic. 
                    When I was unable to continue lessons I stumbled upon VATSIM, which is a free network connecting many flight simulators
                    and allowing anybody at home to connect and simulate their flight. In addition to simulated flights, you are also
                    able to train to become an Air Traffic Controller.
                </p>
                <a target="_blank" rel="noreferrer" href={vatsimLink}>More information on VATSIM!</a>

                <h2>NYARTCC</h2>
                <p>
                    Being from New Jersey, I joined the Virtual NYARTCC which services the New York and Philadelphia areas. Throughout the years,
                    I've achieved a lot that I never even thought of doing when I joined. This includes earning my Center and Instructor ratings 
                    (one of only ~15 controllers to do on a roster of over 200), and joining the staff as a Mentor, the Newark Facility Coordinator,
                    a member of the Web Team, and the Social Media Manager.
                </p>
                <a target="_blank" rel="noreferrer" href={nyartccLink}>More information on the NYARTCC!</a>
            </div>
        </AviationInfo>
    )
}


const AviationInfo = styled.div`
    .items {
        display: block;
    }

    a {
        color: #e0b6dc;
        text-decoration: none;
        font-size: 20px;
    }
`


export default Aviation;
