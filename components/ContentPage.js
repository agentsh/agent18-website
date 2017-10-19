import PropTypes from 'prop-types';
import React from 'react';

import {
    HeaderImage,
    HeaderImageContainer,
    HeaderSection,
    Main,
    MainSection,
} from './DefaultPage';
import ContentBlock from './ContentBlock';
import Footer from '../components/Footer.js';
import Page from '../components/Page.js';

export default class ContentPage extends React.PureComponent {
    static propTypes = {
        headerImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
        contentBlocks: PropTypes.array.isRequired,
    };

    render() {
        const { contentBlocks } = this.props;
        return (
            <Page {...this.props}>
                <HeaderImageContainer>
                    <HeaderImage image={this.props.headerImage}>
                        <h1>{this.props.title}</h1>
                    </HeaderImage>
                </HeaderImageContainer>
                <Main>
                    <HeaderSection>
                        <h2>{this.props.title2}</h2>
                    </HeaderSection>
                    <MainSection>
                        {contentBlocks && contentBlocks.length > 0 &&
                            contentBlocks.map((block, idx) => (
                                <ContentBlock key={idx} index={idx} {...block} />
                            ))
                        }
                    </MainSection>
                </Main>
                <Footer />
            </Page>
        );
    }
}
