import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const logoSize = 80;
const togglerSize = 40;

const HeaderContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    z-index: 2;
    width: ${logoSize}px;
    transform: translateX(-50%);
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
    transform: translateX(-50%);

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

const List = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: url(static/menu-background.png) #fff;

    text-align: center;
    text-transform: uppercase;
    font-family: Teko;
    font-size: 40px;
    color: #2C2C2C;
    line-height: 44px;

    > ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        list-style-type: none;
        list-style-position: inside;

        > li {
            margin: 20px 0 0 0;

            letter-spacing: 1px;
        }
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
                <ul>
                    <li>Schedule</li>
                    <li>Venue</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>AgentConf 2017</li>
                </ul>
            </List>
        );
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            opened: !prevState.opened,
        }));
    };
}
