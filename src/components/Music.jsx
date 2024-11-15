import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

function Music({navbarSelected}) {
    const favPhotos = [
        `<img src='common-cents-group.jpeg' alt='Band Photo at Common Cents Northeastern' />`,
        `<img src='common-cents-stage-1.jpeg' alt='Common Cents Northeastern #1' />`,
        `<img src='common-cents-stage-2.jpeg' alt='Common Cents Northeastern #2' />`,
        `<img src='brandy-nyc.jpg' alt='Brandy Melville NYC' />`,
        `<img src='junkyard-boston.jpeg' alt='Junkyard Boston' />`,
    ];
    
    const songsIvePlayed = [
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/track/1JklprC93mtLPeqn8D2w02?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/track/3zejtdOOa90ObNXH92gvhW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/track/0731deLwmQsvfvHmfL0Vup?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/track/3DPunWJcudK88nW03nFioE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    ];

    const artistsIvePlayed = [
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/2VRzDvOFUJEFtt0vvnPg9A?utm_source=generator" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/2zDF6PeSxBlLKma4IMAlLu?utm_source=generator" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/6Kf3t2SUht5mKLfTu6CC3a?utm_source=generator" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/6ohqAvsZ41nCnBSwrDpqvc?utm_source=generator" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    ];

    const artistsIveOpened = [
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/2vnB6tuQMaQpORiRdvXF9H?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/5NyCIBCeU080ynEj33S4hC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/1UJKiAI4Evnhh1ExDse25D?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/0SwK6bwzmGkViNoxSbJ5Mk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/0QitJHI0ZwMa5F9TR6EYSl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/6VgPyGeGO86DztjK7GCYT3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    ];

    if (navbarSelected === "music") return (
        <MusicInfo>
            <div className='items'>
                <h2>Background</h2>
                <p>
                    I started playing the drums in the third grade and continued up through my sophomore year of High School.
                    For years after, I missed playing but didn't have a reason to start, especially when I was in a cramped freshman year college dorm room.
                </p>
                <p>
                    Fortunately, a High School friend who went to Northeastern as well introduced me to the Songwriting Club. I don't write my own music,
                    but it was a great way to meet new people and it gave me so many new opportunities to play music. It was through this that I met incredibly talented artists
                    including most of the ones I'll mention below. Additionally, the songs I have played on below have over 150k combined plays on Spotify!
                </p>

                <h2>
                    Some Fun Photos
                </h2>

                <Carousel items={favPhotos} />

                <h2>
                    Songs I've Played On
                </h2>
                <Carousel items={songsIvePlayed} />

                <h2>
                    Artists I've Played With
                </h2>
                <Carousel items={artistsIvePlayed} />

                <h2>
                    Artists I've Opened For
                </h2>
                <Carousel items={artistsIveOpened} />
                <br />
            </div>
        </MusicInfo>
    )
}


const MusicInfo = styled.div`
    .items {
        display: block
    }
`


export default Music;
