import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Page from '../components/Page';
import SpeakerSlider from '../components/SpeakerSlider';
import config from '../config';

export default class Slider extends React.PureComponent {
    propTypes = {
        speakers: PropTypes.array,
    };

    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/.json');
        const json = await response.json();
        return json;
    }

    render() {
        return (
            <Page>
                <div style={{marginTop: 300}}>
                    <SpeakerSlider speakers={this.props.speakers} />
                </div>
            </Page>
        );
    }
}
