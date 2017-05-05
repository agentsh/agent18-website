import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Page from '../components/Page';

const MountainContainerWrapper = styled.div`
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

    background-image: url(static/homepage-background.jpg);
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

    render() {
        return (
            <MountainBackground
                style={{
                    transform: 'scale(' + (1 + this.props.animationProgress / 500) + ')',
                    opacity: (0.4 + 0.3 * this.props.animationProgress / 100),
                }} />
        );
    }
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
    state = {
        animationProgress: 0,
        windowHeight: 0,
    };

    slideCount = 3;
    scrollDividend = 50;
    maxProgress = 100;
    progressStep = this.maxProgress / this.slideCount;

    componentDidMount() {
        this.updateWindowHeight();
        this.updateAnimationProgress();
        window.addEventListener('scroll', this.updateAnimationProgress);
        window.addEventListener('resize', this.updateWindowHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateAnimationProgress);
        window.removeEventListener('resize', this.updateWindowHeight);
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
            <MountainContainerWrapper height={this.maxProgress * this.scrollDividend + this.state.windowHeight}>
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
            </MountainContainerWrapper>
        );
    }

    getSlideTitleOpacity = (slide) => {
        const tile = this.maxProgress / this.slideCount;
        const center = tile / 2;

        if (this.state.animationProgress < center && slide === 0) {
            return 1;
        }

        const lower = tile * slide;
        const upper = tile * (slide + 1);

        if (this.state.animationProgress < lower || this.state.animationProgress > upper) {
            return 0;
        }

        const diff = Math.abs((this.state.animationProgress - lower) - center);

        return 1 - diff / center;
    };

    updateAnimationProgress = () => {
        let scroll = window.scrollY / this.scrollDividend;
        if (scroll > this.maxProgress) {
            scroll = this.maxProgress;
        }

        this.setState({animationProgress: scroll});
    };

    updateWindowHeight = () => {
        this.setState({windowHeight: window.innerHeight});
    };
}

export default class Index extends React.PureComponent {
    render() {
        return (
            <Page>
                <MountainSlide />
            </Page>
        );
    }
}
