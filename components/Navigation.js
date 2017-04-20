import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const logoSize = 80;
const togglerSize = 40;
const navigationTop = logoSize + togglerSize + 50;

const HeaderContainer = styled.nav`
    position: fixed;
    top: 20px;
    left: 50%;
    z-index: 2;
    width: ${logoSize}px;
    margin: 0 0 0 ${-logoSize / 2}px;
`;

const Logo = styled.div`
    position: relative;
    height: ${logoSize}px;
    width: ${logoSize}px;
    z-index: 2;

    background: url(static/logo.png);
    background-size: ${logoSize}px ${logoSize}px;
    border-radius: ${logoSize / 2}px;
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

const Toggler = styled(Button)`
    position: relative;
    top: -5px;
    left: 50%;
    z-index: 1;
    margin: 0 0 0 ${-togglerSize / 2}px;

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

const List = styled.ul`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: ${navigationTop}px 0 0 0;

    background: url(static/menu-background.png) #fff;
    background-size: 80px;

    list-style-type: none;
    list-style-position: inside;

    text-align: center;
    text-transform: uppercase;
    font-family: Teko;
    font-size: 40px;
    color: #2C2C2C;
    line-height: 44px;

    > li {
        margin: 20px 0 0 0;

        letter-spacing: 1px;
    }
`;

export default class Navigation extends React.Component {
    state = {
        opened: false,
    };

    render() {
        const navigationList = this.state.opened ? this.renderNavigationList() : '';

        return (
            <header>
                <HeaderContainer opened={this.state.opened}>
                    <Logo />
                    <Toggler size={togglerSize} onClick={this.handleToggle} />
                </HeaderContainer>
                {navigationList}
            </header>
        );
    }

    renderNavigationList() {
        return (
            <List>
                <li>Schedule</li>
                <li>Venue</li>
                <li>About</li>
                <li>Blog</li>
                <li>AgentConf 2017</li>
            </List>
        );
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            opened: !prevState.opened,
        }));
    };
}
