import React from 'react';
import styled from 'styled-components';
import Newsletter from './Newsletter';
import Link from 'next/link';

const FooterContainer = styled.footer`
    margin: 0 70px 55px 70px;
    padding: 45px 60px;
    color: white;
    background-color: black;
    font-family: Teko;
`;

const FooterLink = styled.a`
    display: inline-block;
    padding-right: 30px;
    color: white;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
`;

export default class Footer extends React.PureComponent {
    render() {
        return (
            <FooterContainer>
                <Newsletter />
                <Link href="/coc"><FooterLink>Code of Conduct</FooterLink></Link>
                <Link href="/disclaimer"><FooterLink>Disclaimer</FooterLink></Link>
                <FooterLink href="mailto:team@agent.sh">contact</FooterLink>
            </FooterContainer>
        );
    }
}
