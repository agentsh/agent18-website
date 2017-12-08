import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sponsor from './Sponsor';

const SponsorContainer = styled.div`
    margin: 0 160px 0 130px;
    color: #fff;
    display: flex;
    flex-direction: column;

    h2 {
        order: 1;
    }

    @media(min-width: 900px) {
        flex-direction: row;

        h2 {
            width: 170px;
            margin-left: 40px;
            order: 3;
        }
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
    order: 2;
`;

export default class Sponsors extends React.PureComponent {
    static propTypes = {
        mainSponsor: PropTypes.object,
        sponsors: PropTypes.array,
        partners: PropTypes.array,
    };
    render() {
        return (
            <SponsorContainer>
                <h2>The partners making it all possible</h2>
                <SponsorBox>
                    <h3>Main Sponsor</h3>
                    <Sponsor website={this.props.mainSponsor.website} logo={this.props.mainSponsor.logo} />
                    <hr />
                    <h3>Sponsors</h3>
                    {this.props.sponsors.map((sponsor, index) => (
                        <Sponsor key={index} website={sponsor.website} logo={sponsor.logo} />)
                    )}
                    <hr />
                    <h3>Partners</h3>
                    {this.props.partners.map((partner, index) => (
                        <Sponsor key={index} website={partner.website} logo={partner.logo} />)
                    )}
                </SponsorBox>
            </SponsorContainer>
        );
    }
}
