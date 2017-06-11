import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page.js';

const HeaderImage = styled.header`
    position: relative;
    z-index: 1;
    margin: 60px 60px 0 60px;
    height: calc(100% - 115px);

background: url(static/disclaimer-header.jpg) no-repeat center;
    background-size: auto 100%;
`;

const Main = styled.main`
    display: flex;

    position: relative;
    z-index: 1;

    margin: 140px 110px 100px 110px;

    color: #fff;

    h2 {
        font-weight: 100;
        font-family: Teko;
        font-size: 48px;
        line-height: 54px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h3 {
        font-weight: 100;
        font-family: Teko;
        font-size: 28px;
        line-height: 40px;
        text-transform: uppercase;

        margin: 60px 0 30px 0;
    }

    p {
        color: #ddd;
        font-size: 16px;
        line-height: 30px;
    }
`;

const HeaderSection = styled.section`
    margin: 0 67px 0 74px;
`;

const MainSection = styled.section`
    p {
        margin-bottom: 30px;
    }
`;

export default class Disclaimer extends React.PureComponent {
    render() {
        return (
            <Page>
                <HeaderImage />
                <Main>
                    <HeaderSection>
                        <h2>Disclaimer</h2>
                    </HeaderSection>
                    <MainSection>
                        <p>
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
                        </p>
                    </MainSection>
                </Main>
            </Page>
        );
    }
}
