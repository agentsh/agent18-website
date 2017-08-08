import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Page from '../components/Page.js';
import Footer from '../components/Footer.js';

const HeaderImageContainer = styled.div`
    height: 100%;

    @media (min-width: 800px) {
        height: calc(100vh - 120px);
        width: calc(100% - 120px);
        margin: 60px;
    }
`;
const headerImageGradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

const HeaderImage = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    max-width: 100%;
    background-image: ${headerImageGradient}, url(${props => props.image['small']});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    @media (min-width: 1000px) {
        background-image: ${headerImageGradient}, url(${props => props.image['medium']});
    }
    @media (min-width: 2000px) {
        background-image: ${headerImageGradient}, url(${props => props.image['large']});
        margin: 60px 60px 0 60px;
    }
    h1 {
        margin-left: 15%;
        width: 352px;
        color: #ffffff;
        font-family: Teko;
        font-size: 64px;
        line-height: 64px;
        text-transform: uppercase;
    }
`;

const Main = styled.main`
    display: block;
    margin: 120px 20px 160px 20px;
    @media (min-width: 1000px) {
        display: flex;
        margin: 140px 110px 100px 110px;
    }
    position: relative;
    z-index: 1;

    color: #fff;

    a,
    a:hover {
        color: white;
    }
    h2 {
        font-weight: 100;
        font-family: Teko;
        font-size: 48px;
        line-height: 54px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h3 {
        font-weight: 100;
        font-family: Teko;
        font-size: 28px;
        line-height: 40px;
        text-transform: uppercase;
    }

    p {
        color: #ddd;
        font-size: 16px;
        line-height: 30px;
    }
`;

const HeaderSection = styled.section`@media (min-width: 1000px) {margin: 0 67px 0 74px;}`;

const MainSection = styled.section`
    p {
        margin-bottom: 30px;
    }
`;

export default class DefaultPage extends React.PureComponent {
    static propTypes = {
        headerImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
    };

    render() {
        return (
            <Page {...this.props}>
                <HeaderImageContainer>
                    <HeaderImage image={this.props.headerImage}>
                        <h1>
                            {this.props.title}
                        </h1>
                    </HeaderImage>
                </HeaderImageContainer>
                <Main>
                    <HeaderSection>
                        <h2>
                            {this.props.title2}
                        </h2>
                    </HeaderSection>
                    <MainSection dangerouslySetInnerHTML={{__html: this.props.article}} />
                </Main>
                <Footer />
            </Page>
        );
    }
}
