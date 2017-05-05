import React from 'react';
import Page from '../components/Page';
import SpeakerSlider from '../components/SpeakerSlider';

export default class Index extends React.PureComponent {
    render() {
        return (
            <Page>
                <div style={{ marginTop: 300 }}>
                    <SpeakerSlider />
                </div>
            </Page>
        );
    }
}
