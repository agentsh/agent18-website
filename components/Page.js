import React from 'react';
import PropTypes from 'prop-types';
import {injectGlobal} from 'styled-components';
import Head from 'next/head';
import Navigation from './Navigation';

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: url(static/site-background.png) #282828;
        background-size: 80px;
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
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}
