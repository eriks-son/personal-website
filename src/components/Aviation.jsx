import styled from 'styled-components';
import { ReadMore } from './ReadMore';
import { ReadMoreFlightLessons } from './read_mores/ReadMoreFlightLessons';

function Aviation({navbarSelected}) {
    const readMoreFlightLessons = (
        <ReadMoreFlightLessons />
    );
    const readMoreFlightLessionsShowText = "Click to read more about flight lessons!"

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

                <ReadMore content={readMoreFlightLessons} showText={readMoreFlightLessionsShowText} />
            </div>
        </AviationInfo>
    )
}


const AviationInfo = styled.div`
    .items {
        display: block;
    }
`


export default Aviation;
