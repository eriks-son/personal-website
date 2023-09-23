import React from 'react';
import styled from 'styled-components';

function Work({navbarSelected}) {
    if (navbarSelected === "work") return (
        <WorkInfo>
            <div className='items'>
                <h2>Wayfair</h2>
                <p>
                    Starting in July of 2023, I was selected for a co-op as a Software Engineer at Wayfair in Boston, MA. 
                    I was assigned to the Order Management System (OMS) team for Wayfair's own CasteGate Forwarding (CGF).
                    CGF is Wayfair's international logistics service, allowing supplies to ship and track their products all the way from the origin factory
                    to the final warehouse.
                </p>
                <p>
                    Ever since my first day on the team, I felt fortunate for my assignment due to the modern technologies involved and the interesting use cases.
                    This was my first time having to be concerned with all the different combinations of orders and bookings and forced me to get comfortable with not just
                    the technical aspects of the job, but the business ones as well.
                </p>
                <p>
                    I am also incredibly fortunate for the welcoming and helpful team. Everybody involved is never more than a Slack message away from helping me as I was getting set up
                    and I was fortunate enough to be given real tickets and real responsibility the moment I was onboarded. This has forced me to get comfortable with
                    the stack and the business operations quickly without feeling like I was drowning in new information.
                </p>
            </div>
        </WorkInfo>
    )
}


const WorkInfo = styled.div`
    .items {
        display: block;
    }
`


export default Work;
