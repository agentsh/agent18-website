import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';

const radius = 335 / 4;
const diameter = radius * 2;
const height = 40;

const FooterContainer = styled.footer`
    position: fixed;
    left: 50%;
    bottom: ${-diameter + height}px;
    transform: translate(-50%);
`;

const Circle = styled.div`
    position: relative;
    z-index: 2;
    background: #000;
    border-radius: ${radius}px;
    width: ${diameter}px;
    height: ${diameter}px;

    font-family: Teko;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    line-height: 50px;

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

const Action = styled(Button)`
    position: relative;
    z-index: 1;
    left: 50%;
    top: 5px;
    transform: translate(-50%);

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

export default class FooterHint extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Action>
                    <Icon name="ticket" />
                </Action>
                <Circle>
                    Tickets
                </Circle>
            </FooterContainer>
        );
    }
}