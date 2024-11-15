import React from 'react';
import styled from 'styled-components';
import { ReadMore } from './ReadMore';
import { ReadMoreWayfair } from './read_mores/ReadMoreWayfair';

function Work({navbarSelected}) {
    const cgfLink = "https://sell.wayfair.com/operate-castlegate-forwarding";
    const lillipiesLink = "https://lillipies.com/";
    const readMoreWayfair = (
        <ReadMoreWayfair />
    );
    const readMoreWayfairShowText = "Click to read more about a specific problem I tackled!";

    if (navbarSelected === "work") return (
        <WorkInfo>
            <div className='items'>
                <h2>Capital One (TIP)</h2>
                <p>
                    Over the summer of 2024, I was a Software Engineer in Capital One's Technology Internship Program in Richmond, VA.
                    I worked on a fullstack team with 3 other interns creating a ledger that would track changes to teams'
                    AWS resource changes and estimate their effect on cost and how efficient that team was with their resourcing.
                </p>
                <p>
                    The backend of the project consisted of a new Python Lambda API connected to a PostgreSQL database.
                    The frontend was a new page in the existing Angular web app (with TypeScript) used by multiple teams. Finally, there was a daily
                    job that started in Databricks and was converted into an AWS Glue job. By the end of the project,
                    all of our code was live in production and using real life production data from our daily job.
                </p>
                <p>
                    Despite being in a completely new city and knowing no one, it wasn't long before I felt at home.
                    My manager and his entire team were more than welcoming and always there to help out with our project.
                </p>

                <h2>Wayfair (CGF)</h2>
                <p>
                    Starting in July of 2023, I was selected for a co-op as a Software Engineer at Wayfair in Boston, MA. 
                    I was assigned to the Order Management System (OMS) team for Wayfair's own CasteGate Forwarding (CGF).
                    CGF is Wayfair's international logistics service, allowing supplies to ship and track their products all the way from the origin factory
                    to the final warehouse.
                </p>
                <p>
                    Ever since my first day on the team, I felt fortunate for my assignment due to the modern technologies involved and the interesting use cases.
                    This was my first time having to be concerned with all the different combinations of orders and bookings and forced me to get comfortable with not just
                    the technical aspects of the job, but the business ones as well. For the technical aspects, the backend used Python and Kafka for asynchronous event handling,
                    while the frontend was React with TypeScript.
                </p>

                <ReadMore content={readMoreWayfair} showText={readMoreWayfairShowText} />

                <p>
                    I was also incredibly fortunate for the welcoming and helpful team. Everybody involved was never more than a Slack message away from helping me as I was getting set up
                    and I was fortunate enough to be given real tickets and real responsibility the moment I was onboarded. This has forced me to get comfortable with
                    the stack and the business operations quickly without feeling like I was drowning in new information.
                </p>
                <a target="_blank" rel="noreferrer" href={cgfLink}>More information on CastleGate Forwarding!</a>

                <h2>LiLLiPiES Bakery</h2>
                <p>
                    LiLLiPiES was my first ever job, starting the summer after my freshman year of high school. It's a family owned and run bakery opened by
                    Jennifer Carson in Princeton, NJ after years of selling her baked goods in farmers markets. She has such an honest love for her work that
                    is infectious and makes it such a delightful and familial work environment.
                </p>
                <p>
                    Working at LiLLiPiES helped me learn many important life skills, from helping customers to working with and supervising other employees.
                    I worked there for over 4 years and throughout my time I trained over 20 different employees. It's one of the first places I visit whenever I'm
                    back home in New Jersey and Jen will always be like a second mom to me.
                </p>
                <img src='Lillipies photo.jpg' alt='Jen Carson, owner of LiLLiPiES' />
                <a target="_blank" rel="noreferrer" href={lillipiesLink}>More information on LiLLiPiES!</a>
            </div>
        </WorkInfo>
    )
}


const WorkInfo = styled.div`
    .items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 278px;
        height: 300px;
        align-items: center;
        margin: 35px;
        border-radius: 15px;
    }
`


export default Work;
