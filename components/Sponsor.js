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
    opacity: .6;
`;

export default class Sponsor extends React.Component {
    static propTypes = {
        website: PropTypes.string,
        logo: PropTypes.string,
    };
    render() {
        return (
            <SponsorContainer>
                <a href={this.props.website}>
                    <img src={this.props.logo} />
                </a>
            </SponsorContainer>
        );
    }
}
