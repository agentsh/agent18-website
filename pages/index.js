import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Page from '../components/Page';

const maxProgress = 100;

const SlideContainer = styled.div`
    height: ${(props) => props.height}px;
`;

const MountainContainer = styled.div`
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

const MountainBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: url(static/mountain-background.jpg);
    background-size: cover;

    will-change: transform, filter;
`;

const MountainCloud = styled.img`
    position: fixed;

    will-change: transform, opacity;
`;

class MountainBackgroundContainer extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
    };

    startOpacity = 0.4;
    topOpacity = 0.7;
    increaseOpacity = this.topOpacity - this.startOpacity;
    animationSplit1 = 99;
    animationSplit2 = maxProgress - this.animationSplit1;

    render() {
        return (
            <MountainBackground
                style={{
                    transform: 'scale(' + (1 + this.props.animationProgress / 500) + ')',
                    opacity: this.getBackgroundOpacity(),
                }} />
        );
    }

    getBackgroundOpacity = () => {
        if (this.props.animationProgress <= this.animationSplit1) {
            return this.startOpacity + ((this.increaseOpacity) * this.props.animationProgress / this.animationSplit1);
        }

        return this.topOpacity - (
            this.topOpacity * (this.props.animationProgress - this.animationSplit1) / this.animationSplit2
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
        windowHeight: PropTypes.number.isRequired,
        scrollDividend: PropTypes.number.isRequired,
    };

    state = {
        animationProgress: 0,
    };

    slideCount = 3;
    progressStep = maxProgress / this.slideCount;

    componentDidMount() {
        this.updateAnimationProgress();
        window.addEventListener('scroll', this.updateAnimationProgress);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateAnimationProgress);
    }

    render() {
        let slide = null;

        if (this.state.animationProgress > 2 * this.progressStep) {
            slide = (
                <SlideTitle style={{opacity: this.getSlideTitleOpacity(2)}}>
                    <h1>Learn, talk and ski</h1>
                </SlideTitle>
            );
        } else if (this.state.animationProgress > this.progressStep) {
            slide = (
                <SlideTitle style={{opacity: this.getSlideTitleOpacity(1)}}>
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
                <SlideTitle style={{opacity: this.getSlideTitleOpacity(0)}}>
                    <h2>The international event for coding inspiration</h2>
                    <h1>AgentConf 2018</h1>
                </SlideTitle>
            );
        }

        return (
            <MountainContainer>
                <MountainBackgroundContainer animationProgress={this.state.animationProgress} />
                <MountainCloudContainer
                    animationProgress={this.state.animationProgress}
                    image="static/cloud1.png"
                    top={-366}
                    left={-65} />
                <MountainCloudContainer
                    animationProgress={this.state.animationProgress}
                    image="static/cloud2.png"
                    top={299} />
                <MountainCloudContainer
                    animationProgress={this.state.animationProgress}
                    image="static/cloud3.png"
                    left={-284} />
                {slide}
            </MountainContainer>
        );
    }

    getSlideTitleOpacity = (slide) => {
        const center = this.progressStep / 2;

        if (this.state.animationProgress < center && slide === 0) {
            return 1;
        }

        const diff = Math.abs(this.state.animationProgress % this.progressStep - center);

        return 1 - diff / center;
    };

    updateAnimationProgress = () => {
        let scroll = window.scrollY / this.props.scrollDividend;
        if (scroll > maxProgress) {
            scroll = maxProgress;
        }

        this.setState({animationProgress: scroll});
    };
}

export default class Index extends React.PureComponent {
    state = {
        windowHeight: 0,
    };

    mountainSlideScrollDividend = 50;

    componentDidMount() {
        this.updateWindowHeight();
        window.addEventListener('resize', this.updateWindowHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowHeight);
    }
    render() {
        const mountainSlideHeight = maxProgress * this.mountainSlideScrollDividend + this.state.windowHeight;

        return (
            <Page>
                <SlideContainer height={mountainSlideHeight}>
                    <MountainSlide
                        windowHeight={this.state.windowHeight}
                        scrollDividend={this.mountainSlideScrollDividend} />
                </SlideContainer>
            </Page>
        );
    }

    updateWindowHeight = () => {
        this.setState({windowHeight: window.innerHeight});
    };
}
