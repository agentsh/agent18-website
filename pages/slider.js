import React from 'react';
import fetch from 'isomorphic-fetch';

import Page from '../components/Page';
import SpeakerSlider from '../components/SpeakerSlider';
import config from '../config';

export default class Index extends React.PureComponent {
    static async getInitialProps(ctx) {
        const {req} = ctx;
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
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
