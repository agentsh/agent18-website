import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Page from '../components/Page.js';

const HeaderImage = styled.header`
    position: relative;
    z-index: 1;
    margin: 60px 60px 0 60px;
    height: calc(100% - 115px);
    background-image: url(${(props) => props.image['large']});
    background: no-repeat center;
    background-size: auto 100%;

    @media (max-width: 1000px) {
        background-image: url(${(props) => props.image['small']});
    }
    @media (max-width: 2000px) {
        background-image: url(${(props) => props.image['medium']});
    }
`;

const Main = styled.main`
    display: flex;

    position: relative;
    z-index: 1;

    margin: 140px 110px 100px 110px;

    color: #fff;

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

        margin: 60px 0 30px 0;
    }

    p {
        color: #ddd;
        font-size: 16px;
        line-height: 30px;
    }
`;

const HeaderSection = styled.section`
    margin: 0 67px 0 74px;
`;

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
    };

    render() {
        return (
            <Page>
                <HeaderImage image={this.props.headerImage} />
                <Main>
                    <HeaderSection>
                        <h2>{this.props.title2}</h2>
                    </HeaderSection>
                    <MainSection
                        dangerouslySetInnerHTML={{__html: this.props.article}} />

                </Main>
            </Page>
        );
    }
}
