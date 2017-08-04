import React from 'react';
import styled from 'styled-components';
import Newsletter from './Newsletter';
import Button from './Button';
import Icon from './Icon';
import Link from 'next/link';

const FooterContainer = styled.footer`
    margin: 0 70px 55px 70px;
    padding: 45px 60px;
    color: white;
    background-color: black;
    font-family: Teko;
`;

const TextLink = styled.a`
    display: inline-block;
    padding-right: 30px;
    color: white;
    font-size: 22px;
    line-height: 35px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
`;

const ButtonLink = styled.a`
    position: relative;
    color: black;
    float: right;
    margin-left: 10px;
`;

const buttonSize = 35;
const buttonFontSize = 16;

export default class Footer extends React.PureComponent {
    render() {
        return (
            <FooterContainer>
                <Newsletter />
                <Link href="/coc"><TextLink>Code of Conduct</TextLink></Link>
                <Link href="/disclaimer"><TextLink>Disclaimer</TextLink></Link>
                <TextLink href="mailto:team@agent.sh">contact</TextLink>
                <ButtonLink href="https://www.instagram.com/teamagent">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="instagram" />
                    </Button>
                </ButtonLink>
                <ButtonLink href="https://twitter.com/agentconf">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="twitter" />
                    </Button>
                </ButtonLink>
                <ButtonLink href="https://www.facebook.com/agentsh/">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="fb" />
                    </Button>
                </ButtonLink>
            </FooterContainer>
        );
    }
}
