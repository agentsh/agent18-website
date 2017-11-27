import React from 'react';
import styled from 'styled-components';

const SponsorContainer = styled.div`
    margin: 0 160px 0 130px;
    display: flex;
    color: #fff;

    h2 {
        width: 170px;
        margin-left: 40px;
    }

    h3 {
        font-family: Teko;
        font-weight: 100;
        font-size: 28px;
        line-height: 40px;
        text-transform: uppercase;
        text-align: center;
        margin: 40px 0;
    }

    hr {
        background-color: rgba(224,224,224,0.2);
        border: 0;
        height: 1px;
        margin: 60px 70px 0;
    }
`;

const SponsorBox = styled.div`
    background-color: #282828;
    flex-grow: 1;
`;

export default class Sponsors extends React.PureComponent {
    render() {
        return (
            <SponsorContainer>
                <SponsorBox>
                    <h3>Main Sponsor</h3>
                    <hr />
                    <h3>Sponsors</h3>
                    <hr />
                    <h3>Partners</h3>
                </SponsorBox>
                <h2>The partners making it all possible</h2>
            </SponsorContainer>
        );
    }
}
