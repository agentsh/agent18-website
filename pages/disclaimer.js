import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page.js';

const HeaderImage = styled.header`
    position: relative;
    z-index: 1;
    margin: 60px 60px 0 60px;
    height: calc(100% - 115px);

    background: url(http://placehold.it/1300x660) no-repeat center;
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
`;

export default class Disclaimer extends React.PureComponent {
    render() {
        return (
            <Page>
                <HeaderImage />
                <Main>
                    <HeaderSection>
                        <h2>Disclaimer with some aditional stuff</h2>
                    </HeaderSection>
                    <MainSection>
                        <h3>Information</h3>
                        <p>Even though there is a huge amount of material on this topic, the problem of maintainable, sustainable and successful software development is not yet solved. So it is important to have events dedicated to this topic, where people can learn and collaborate on how to deal with the problem of building the right thing in the right way, and how to push for finding better solutions. Even more so we wanted to motivate and empower people to step up their efforts software. This is why we started to organise the Umma Hüsla Hackathon in 2015. Several initiatives started from there, one being „Agent” to be held on 21st and 22nd of January 2017: with sessions and workshops.</p>
                        <h3>More information</h3>
                        <p>More blabla</p>
                    </MainSection>
                </Main>
            </Page>
        );
    }
}
