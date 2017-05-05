import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Page from '../components/Page';

const MountainContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #fff;
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
                    opacity: (0.4 + this.props.animationProgress / 100),
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
    };

    componentDidMount() {
        this.updateAnimationProgress();
        window.addEventListener('scroll', this.updateAnimationProgress);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateAnimationProgress);
    }

    render() {
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
            </MountainContainer>
        );
    }

    updateAnimationProgress = () => {
        this.setState({animationProgress: window.scrollY / 50});
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
