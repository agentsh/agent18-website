import React from 'react';
import PropTypes from 'prop-types';
import {injectGlobal} from 'styled-components';
import Head from 'next/head';
import Navigation from './Navigation';
import Lines from './Lines';

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: url(static/site-background.png) #282828;
        background-size: 80px;
    }

    @font-face {
        font-family: 'icomoon';
        src:  url('static/fonts/icomoon.eot?qevub9');
        src:  url('static/fonts/icomoon.eot?qevub9#iefix') format('embedded-opentype'),
            url('static/fonts/icomoon.ttf?qevub9') format('truetype'),
            url('static/fonts/icomoon.woff?qevub9') format('woff'),
            url('static/fonts/icomoon.svg?qevub9#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`;

export default class Page extends React.Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" />
                </Head>
                <Lines color="rgba(0, 0, 0, 0.15)" />
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}
