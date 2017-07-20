import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import config from '../config';
import Page from '../components/Page';
import SlideBackground from '../components/index/SlideBackground';
import SlideTitle from '../components/index/SlideTitle';
import Head from '../components/Head';

const maxProgress = 100;

const SlideContainerWrapper = styled.div`
    height: ${(props) => props.height}px;
`;

const SlideContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #fff;
`;

const MountainCloud = styled.img`
    position: fixed;

    will-change: transform, opacity;
`;

const VideoImageContainer = styled.figure`
    height: ${(props) => props.height - 120}px;
    width: calc(100% - 120px);
    margin: 60px;

    overflow: hidden;
`;

const VideoImage = styled.img`
    float: right;
`;

class MountainCloudContainer extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        left: PropTypes.number,
        top: PropTypes.number,
    };

    render() {
        return (
            <MountainCloud
                src={this.props.image}
                style={{
                    top: this.props.top + 'px',
                    left: this.props.left + 'px',
                    transform: 'scale(' + (1 + this.props.animationProgress / 50) + ')',
                    opacity: 1 - this.props.animationProgress / 100,
                }} />
        );
    }
}

class MountainSlide extends React.PureComponent {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
    };

    slideCount = 4;
    progressStep = maxProgress / this.slideCount;

    render() {
        let slide = null;

        if (this.props.animationProgress > 3 * this.progressStep) {
      // empty slide for transition of background images
        } else if (this.props.animationProgress > 2 * this.progressStep) {
            slide = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h1>Learn, talk and ski</h1>
                </SlideTitle>
      );
        } else if (this.props.animationProgress > this.progressStep) {
            slide = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h2>25 - 28 January 2018</h2>
                    <h1>
            Experts and industry leaders will
            come together to showcase their work
            in ReactJS, React Native and more
          </h1>
                </SlideTitle>
      );
        } else {
            slide = (
                <SlideTitle
                    animationProgress={this.props.animationProgress}
                    progressStep={this.progressStep}
                    fadeIn={false}>
                    <h2>The international event for coding inspiration</h2>
                    <h1>AgentConf 2018</h1>
                </SlideTitle>
      );
        }

        return (
            <SlideContainer>
                <SlideBackground
                    animationProgress={this.props.animationProgress}
                    animationSplit={90}
                    startOpacity={0.4}
                    topOpacity={0.7}
                    image={this.props.image} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud1.png"
                    top={-366}
                    left={-65} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud2.png"
                    top={299} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud3.png"
                    left={-284} />
                {slide}
            </SlideContainer>
        );
    }
}

class CitySlide extends React.PureComponent {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
    };

    maxProgress = 100;
    slideCount = 3;
    progressStep = this.maxProgress / this.slideCount;

    render() {
        let slideTitleContainer = null;
        if (this.props.animationProgress > 2 * this.progressStep) {
      // empty slide
        } else if (this.props.animationProgress > this.progressStep) {
            slideTitleContainer = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h1>Dornbirn, Austria</h1>
                </SlideTitle>
      );
        } else {
      // empty slide
        }

        return (
            <SlideContainer>
                <SlideBackground
                    animationProgress={this.props.animationProgress}
                    animationSplit={50}
                    startOpacity={0.0}
                    topOpacity={0.5}
                    image={this.props.image} />
                {slideTitleContainer}
            </SlideContainer>
        );
    }
}

export default class Index extends React.PureComponent {
    state = {
        windowHeight: 0,
        scrollY: 0,
    };

    static propTypes = {
        animationBackground1: PropTypes.object.isRequired,
        animationBackground2: PropTypes.object.isRequired,
        videoTeaserImage: PropTypes.string.isRequired,
    };

    mountainSlideScrollDividend = 50;
    citySlideScrollDividend = 30;

    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/.json');
        const json = await response.json();

        json.videoTeaserImage = 'http://127.0.0.1:8000/uploads/media/2000x/03/3-Agent_Conf_17_BY_MATTHIAS_RHOMBERG_156.jpg?v=1-0';

        return json;
    }

    componentDidMount() {
        this.updateWindowHeight();
        this.updateScrollY();
        window.addEventListener('resize', this.updateWindowHeight);
        window.addEventListener('scroll', this.updateScrollY);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowHeight);
        window.removeEventListener('scroll', this.updateScrollY);
    }

    render() {
        const mountainSlideHeight = maxProgress * this.mountainSlideScrollDividend;
        const citySlideHeight = maxProgress * this.citySlideScrollDividend + this.state.windowHeight;

        let mountainSlide = 0;
        let citySlide = 0;

        if (this.state.scrollY < mountainSlideHeight) {
            mountainSlide = (
                <MountainSlide
                    animationProgress={this.state.scrollY / this.mountainSlideScrollDividend}
                    image={this.props.animationBackground1} />
            );
        } else if (this.state.scrollY < mountainSlideHeight + citySlideHeight) {
            citySlide = (
                <CitySlide
                    animationProgress={(this.state.scrollY - mountainSlideHeight) / this.citySlideScrollDividend}
                    image={this.props.animationBackground2} />
            );
        }

        return (
            <div>
                <Head />
                <Page>
                    <SlideContainerWrapper height={mountainSlideHeight}>
                        {mountainSlide}
                    </SlideContainerWrapper>
                    <SlideContainerWrapper height={citySlideHeight}>
                        {citySlide}
                    </SlideContainerWrapper>
                    <VideoImageContainer height={this.state.windowHeight}>
                        <VideoImage src={this.props.videoTeaserImage} />
                    </VideoImageContainer>
                </Page>
            </div>
        );
    }

    updateWindowHeight = () => {
        this.setState({windowHeight: window.innerHeight});
    };

    updateScrollY = () => {
        this.setState({scrollY: window.scrollY});
    };
}
