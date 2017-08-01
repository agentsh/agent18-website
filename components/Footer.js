import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Newsletter from './Newsletter';
import Link from 'next/link';

const FooterContainer = styled.footer`
    height: 200px;
    width:1300px;
    max-width:100%;
    align-items: center;
    margin: 0 auto 100px auto;
    color: white;
    font-family: Teko;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 22px;
    box-sizing: border-box;
    
`;

const Row = styled.div`
    height:100px;
    width: 100%;
    ${props => (props.center ? 'justify-content: center' : '')};
    ${props => (props.black ? 'background: black' : '')};
    padding: 0px 30px;
    display:flex;
    align-items: center;
    box-sizing: border-box;

`;

const FooterLink = styled.div`
    display:inline-block;
    padding-right: 30px;
    a,a:hover{
        color:white;
        text-transform:uppercase;
    }
`;

export default class Footer extends React.PureComponent {
    static propTypes = {};

    render() {
        return (
            <FooterContainer>
                <Row center={true}><Newsletter /></Row>
                <Row black={true}>
                    <FooterLink><Link href="/coc"><a>Code of Conduct</a></Link></FooterLink>
                    <FooterLink><Link href="/disclaimer"><a>Disclaimer</a></Link></FooterLink>
                    <FooterLink><a href="mailto:team@agent.sh">contact</a></FooterLink>
                </Row>
            </FooterContainer>
        );
    }
}
