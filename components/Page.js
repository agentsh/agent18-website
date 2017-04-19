import React from 'react';
import PropTypes from 'prop-types';
import {injectGlobal} from 'styled-components';
import Navigation from './Navigation';

injectGlobal`
    body {
        margin: 0;
        padding: 0;

        background: #aaa;
    }
`;

export default class Page extends React.Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}
