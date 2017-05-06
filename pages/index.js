import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Page from '../components/Page';

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

const SlideTitle = styled.header`
    color: #231F20;
    font-family: Teko;
    text-align: center;
    text-transform: uppercase;

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    > h1 {
        font-size: 64px;
        font-weight: 100;
        line-height: 64px;
    }

    > h2 {
        font-size: 28px;
        font-weight: 100;
        line-height: 40px;
    }
`;

const SlideBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: url(${(props) => props.image});
    background-size: cover;

    will-change: transform, filter;
`;

const MountainCloud = styled.img`
    position: fixed;

    will-change: transform, opacity;
`;

class SlideTitleContainer extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        progressStep: PropTypes.number.isRequired,
        fadeIn: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        fadeIn: true,
    };

    render() {
        return (
            <SlideTitle style={{
                opacity: this.getOpacity(this.props.animationProgress, this.props.progressStep, this.props.fadeIn),
            }}>
                {this.props.children}
            </SlideTitle>
        );
    }

    getOpacity = (animationProgress, progressStep, fadeIn = true) => {
        const center = progressStep / 2;

        if (animationProgress < center && !fadeIn) {
            return 1;
        }

        const diff = Math.abs(animationProgress % progressStep - center);

        return 1 - diff / center;
    };
}

class SlideBackgroundContainer extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        animationSplit: PropTypes.number.isRequired,
    };

    startOpacity = 0.4;
    topOpacity = 0.7;
    increaseOpacity = this.topOpacity - this.startOpacity;

    render() {
        return (
            <SlideBackground
                image={this.props.image}
                style={{
                    transform: 'scale(' + (1 + this.props.animationProgress / 500) + ')',
                    opacity: this.getBackgroundOpacity(),
                }} />
        );
    }

    getBackgroundOpacity = () => {
        if (this.props.animationProgress <= this.props.animationSplit) {
            return this.startOpacity + (
                this.increaseOpacity * this.props.animationProgress / this.props.animationSplit
            );
        }

        return this.topOpacity - (
            this.topOpacity * (
                (this.props.animationProgress - this.props.animationSplit) / (maxProgress - this.props.animationSplit)
            )
        );
    };
}

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
    };

    slideCount = 3;
    progressStep = maxProgress / this.slideCount;

    render() {
        let slide = null;

        if (this.props.animationProgress > 2 * this.progressStep) {
            slide = (
                <SlideTitleContainer animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h1>Learn, talk and ski</h1>
                </SlideTitleContainer>
            );
        } else if (this.props.animationProgress > this.progressStep) {
            slide = (
                <SlideTitleContainer animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h2>25 - 28 January 2018</h2>
                    <h1>
                        Experts and industry leaders will
                        come together to showcase their work
                        in ReactJS, React Native and more
                    </h1>
                </SlideTitleContainer>
            );
        } else {
            slide = (
                <SlideTitleContainer
                    animationProgress={this.props.animationProgress}
                    progressStep={this.progressStep}
                    fadeIn={false}>
                    <h2>The international event for coding inspiration</h2>
                    <h1>AgentConf 2018</h1>
                </SlideTitleContainer>
            );
        }

        return (
            <SlideContainer>
                <SlideBackgroundContainer
                    animationProgress={this.props.animationProgress}
                    animationSplit={95}
                    image="static/mountain-background.jpg" />
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
    };

    render() {
        let slideTitleContainer = null;
        if (this.props.animationProgress > 50) {
            slideTitleContainer = (
                <SlideTitleContainer animationProgress={this.props.animationProgress} progressStep={50}>
                    <h1>Dornbirn, Austria</h1>
                </SlideTitleContainer>
            );
        }
        return (
            <SlideContainer>
                <SlideBackgroundContainer
                    animationProgress={this.props.animationProgress}
                    animationSplit={40}
                    image="static/city-background.jpg" />
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

    mountainSlideScrollDividend = 50;
    citySlideScrollDividend = 20;

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
                    animationProgress={this.state.scrollY / this.mountainSlideScrollDividend} />
                );
        } else if (this.state.scrollY < mountainSlideHeight + citySlideHeight) {
            citySlide = (
                <CitySlide
                    animationProgress={(this.state.scrollY - mountainSlideHeight) / this.citySlideScrollDividend} />
            );
        }

        return (
            <Page>
                <SlideContainerWrapper height={mountainSlideHeight}>
                    {mountainSlide}
                </SlideContainerWrapper>
                <SlideContainerWrapper height={citySlideHeight}>
                    {citySlide}
                </SlideContainerWrapper>
            </Page>
        );
    }

    updateWindowHeight = () => {
        this.setState({windowHeight: window.innerHeight});
    };

    updateScrollY = () => {
        this.setState({scrollY: window.scrollY});
    };
}
