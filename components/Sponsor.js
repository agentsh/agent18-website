import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SponsorContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    float: left;
    width: 25%;
    height: 120px;
    opacity: 0.6;

    img {
        max-width: ${props => (props.main ? 260 : 130)}px;
        max-height: ${props => (props.main ? 120 : 60)}px;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default class Sponsor extends React.Component {
    static propTypes = {
        main: PropTypes.boolean,
        logo: PropTypes.string,
        website: PropTypes.string,
    };
    render() {
        const {main, logo, website} = this.props;
        return (
            <SponsorContainer main={main}>
                <a href={website}>
                    <img src={logo} />
                </a>
            </SponsorContainer>
        );
    }
}
