import React from 'react';
import DefaultPage from '../components/DefaultPage';

export default class Disclaimer extends React.Component {
    render() {
        const props = {
            header: 'Code of Conduct',
            article: `
                <h3>Be excellent with each other</h3>
                <p>
                    All attendees, speakers, sponsors and volunteers at our
                    conference are required to agree with the following code of
                    conduct. Organisers will enforce this code throughout the
                    event. We are expecting cooperation from all participants
                    to help ensuring a safe environment for everybody. NEED
                    HELP?
                </p>
                <p>
                    Guntram Bechtold at +43 (664) 35 666 18
                </p>

                <h3>The quick version</h3>
                <p>
                    Our conference is dedicated to providing a harassment-free
                    conference experience for everyone, regardless of gender,
                    age, disability, physical appearance, body size, race,
                    religion (or lack thereof), color, national origin, genetic
                    information or the like. We do not tolerate harassment of
                    conference participants in any form. Sexual language and
                    imagery is not appropriate for any conference venue,
                    including talks, workshops, parties, Twitter and other
                    online media. Conference participants violating these rules
                    may be sanctioned or expelled from the conference without a
                    refund at the discretion of the conference organisers.
                </p>

                <h3>The less quick version</h3>

                <p>
                    Harassment includes offensive verbal comments related to
                    gender, age, disability, physical appearance, body size,
                    race, religion, color, national origin, genetic
                    information, sexual images in public spaces, deliberate
                    intimidation, stalking, following, harassing photography or
                    recording, sustained disruption of talks or other events,
                    inappropriate physical contact, unwelcome sexual attention
                    and the like.
                </p>
                <p>
                    Participants asked to stop any harassing behavior are
                    expected to comply immediately.
                </p>
                <p>
                    Sponsors are also subject to the anti-harassment policy. In
                    particular, sponsors should not use sexualised images,
                    activities, or other material. Booth staff (including
                    volunteers) should not use sexualised
                    clothing/uniforms/costumes, or otherwise create a
                    sexualised environment.
                </p>
                <p>
                    If a participant engages in harassing behavior, the
                    conference organisers may take any action they deem
                    appropriate, including warning the offender or expulsion
                    from the conference with no refund.
                </p>
                <p>
                    If you are being harassed, notice that someone else is
                    being harassed, or have any other concerns, please contact
                    a member of conference staff immediately. Conference staff
                    can be identified as they'll be wearing branded t-shirts.
                </p>
                <p>
                    Conference staff will be happy to help participants contact
                    hotel/venue security or local law enforcement, provide
                    escorts, or otherwise assist those experiencing harassment
                    to feel safe for the duration of the conference. We value
                    your attendance.
                </p>
                <p>
                    We expect participants to follow these rules at conference
                    and workshop venues and conference-related social events.
                </p>
            `,
        };

        return (
            <DefaultPage {...props} />
        );
    }
}
