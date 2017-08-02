import React from 'react';
import DefaultPage from '../components/DefaultPage';

export default class Disclaimer extends React.Component {
    render() {
        const props = {
            header: 'Disclaimer',
            article:
                `<p>
                    Being in the mountains is dangerous, challenging
                    but also unique and wonderful. The same is true
                    when surfing the internet.
                </p>
                <p>
                    Your safety is at the center of all of our works.
                    All our Team here at a Agent is dedicated to create
                    the best experience possible. Practicing safe code
                    during the conference sessions, delivering pleasant
                    experiences while traveling, at your stay or while
                    going out with us, we want to make sure that you
                    get back home safe.
                </p>
                <p>
                    Even tough we use modern ad networks, current
                    retargeting technology and latest hosting services
                    we kindly ask you to do your best in supporting our
                    effort of your safety. Please note that all our
                    pictures are captured under creative commons
                    license and might be used for further marketing.
                </p>
                <p>
                    One thing we got to mention clearly: In case you
                    get hurt, injured or killed Agent Conf, its
                    Co-Organizers and StarsMedia IT Management KG can
                    not take any responsibility since we only organize
                    a couple of talks and got no influence on your
                    driving skills, slopes or other conditions.
                </p>
                <p>
                    Please note that the Photos on this site are
                    captured by Nina Bröll, Christoph Blank,
                    Matthias Rhomberg, Paul Turkowski,
                    Unsplash Photographers and others.
                </p>`,
        };

        return (
            <DefaultPage {...props} />
        );
    }
}
