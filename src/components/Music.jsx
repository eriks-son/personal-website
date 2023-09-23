import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

function Music({navbarSelected}) {
    const songsIvePlayed = [
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
        `<iframe style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/artist/6VgPyGeGO86DztjK7GCYT3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    ];

    const songwritingClubLink = "https://www.instagram.com/huskysongwriters/";

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
                    including most of the ones I'll mention below.
                </p>
                <a target="_blank" href={songwritingClubLink}>More information on the Songwriting Club!</a>

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

    a {
        color: #e0b6dc;
        text-decoration: none;
        font-size: 20px;
    }
`


export default Music;
