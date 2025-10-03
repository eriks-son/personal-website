import styled from 'styled-components';

function Work({navbarSelected}) {
    const cgfLink = "https://sell.wayfair.com/operate-castlegate-forwarding";
    const lillipiesLink = "https://lillipies.com/";

    if (navbarSelected === "work") return (
        <WorkInfo>
            <div className='items'>
                <h2>Capital One (TDP)</h2>
                <p>
                    I started full time at Capital One as a part of their TDP program in one of the New York offices.
                    I work on a fullstack team that generates customers' bank statements. 
                    This includes scheduled jobs and Lambda/Fargate APIs to support our portion of the live Capital One website
                    as well as the website Capital One customer support associates use. Our frontend work is done in TypeScript and Angular
                    whereas our backend is a mix of JavaScript, Python, and Java.
                </p>
                <p>
                    In addition to maintaining and modernizing the existing tech stack, there is plenty of work being done to
                    accomodate new customers as a part of the acquisition of Discover. This means not only supporting the transition
                    but consolidating the best of what both services have to offer into one unified product.
                </p>
                <br />

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
                <br />

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
                <a target="_blank" rel="noreferrer" href={cgfLink}>More information on CastleGate Forwarding!</a>
                <br />

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
