import React from 'react';
import PropTypes from 'prop-types';
import styled, {injectGlobal} from 'styled-components';
import Head from 'next/head';
import Navigation from './Navigation';
import Lines from './Lines';
import FooterHint from './FooterHint';

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: url(static/site-background.png) #282828;
        background-size: 80px;

        font-family: 'Open Sans';
    }

    html, body, body > div:first-child, #__next, [data-reactroot] {
        height: 100%;
    }

    @font-face {
        font-family: 'icomoon';
        src: url('static/fonts/icomoon.eot?qevub9');
        src: url('static/fonts/icomoon.eot?qevub9#iefix') format('embedded-opentype'),
            url('static/fonts/icomoon.ttf?qevub9') format('truetype'),
            url('static/fonts/icomoon.woff?qevub9') format('woff'),
            url('static/fonts/icomoon.svg?qevub9#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`;

const Main = styled.main`
    height: 100%;
    position: relative;
    z-index: 2;
`;

const Footer = styled.footer`
    position: relative;
    z-index: 2;
`;

const Container = styled.div`
    height: 100%;
`;

export default class Page extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <Container>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Teko" rel="stylesheet" />
                </Head>
                <Lines color="rgba(0, 0, 0, 0.15)" />
                <Main>
                    {this.props.children}
                </Main>
                <Navigation />
                <Footer>
                    <FooterHint />
                </Footer>
            </Container>
        );
    }
}
