import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const logoWidth = 100;
const logoHeight = 100;
const togglerSize = 60;

const NavigationContainer = styled.nav`
    position: fixed;
    top: 20px;
    left: 50%;
    width: ${logoWidth}px;
    margin: 0 0 0 ${-logoWidth / 2}px;
`;

const Logo = styled.div`
    position: absolute;
    height: ${logoHeight}px;
    width: ${logoWidth}px;
    z-index: 2;

    background: url(static/logo.png);
    background-size: 100px 100px;
`;

const Toggler = styled(Button)`
    position: absolute;
    top: 90px;
    left: 50%;
    z-index: 1;
    margin: 0 0 0 ${-togglerSize / 2}px;
`;

export default class Navigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Logo />
                <Toggler size={togglerSize} />
            </NavigationContainer>
        );
    }
}
