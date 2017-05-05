import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import styled, {injectGlobal} from 'styled-components';
import Head from './Head';
=======
import { injectGlobal } from 'styled-components';
import Head from 'next/head';
>>>>>>> slider started, basics done
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
    max-width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
`;

const Footer = styled.footer`
    position: relative;
    z-index: 2;
`;

const Container = styled.div`height: 100%;`;

export default class Page extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        hideHeader: PropTypes.bool,
        seo: PropTypes.object,
        showScrollInfo: PropTypes.bool,
    };

    render() {
        return (
<<<<<<< HEAD
            <Container>
                <Head {...this.props.seo} />
=======
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
>>>>>>> slider started, basics done
                <Lines color="rgba(0, 0, 0, 0.15)" />
                <Main>
                    {this.props.children}
                </Main>
                {!this.props.hideHeader && <Navigation />}
                <Footer>
                    <FooterHint showScrollInfo={this.props.showScrollInfo} />
                </Footer>
            </Container>
        );
    }
}
