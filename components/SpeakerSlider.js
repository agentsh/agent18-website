import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Slider from 'react-slick';
import SpeakerSlide from './SpeakerSlide';

const speakers = [
    {
        name: 'Brent Vatne',
        title: 'Expo chief coder',
        teaser:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        github: 'brentvatne',
        twitter: 'brentvatne',
        imageUrls: 'http://lorempixel.com/360/360/people/',
        isModerator: true,
    },
    {
        name: 'Brent Vatne',
        title: 'Expo chief coder',
        teaser:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        github: 'brentvatne',
        twitter: 'brentvatne',
        imageUrl: 'http://lorempixel.com/360/360/people/',
    },
    {
        name: 'Brent Vatne',
        title: 'Expo chief coder',
        teaser:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        github: 'brentvatne',
        twitter: 'brentvatne',
        imageUrl: 'http://lorempixel.com/360/360/people/',
    },
    {
        name: 'Brent Vatne',
        title: 'Expo chief coder',
        teaser:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        github: 'brentvatne',
        twitter: 'brentvatne',
        imageUrl: 'http://lorempixel.com/360/360/people/',
    },
    {
        name: 'Brent Vatne',
        title: 'Expo chief coder',
        teaser:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        github: 'brentvatne',
        twitter: 'brentvatne',
        imageUrl: 'http://lorempixel.com/360/360/people/',
    },
];

export default class Navigation extends React.PureComponent {
    state = {
        currentSlide: 0,
    };

    _sliderSettings = () => ({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        afterChange: idx => {
            this.setState({currentSlide: idx});
        },
    });

    render() {
        const {currentSlide} = this.state;
        const slides = speakers.map((speaker, idx) => {
            return (
                <span key={idx}>
                    <SpeakerSlide speaker={speaker} active={currentSlide === idx} />
                </span>
            );
        });

        return (
            <Slider {...this._sliderSettings()}>
                {slides}
            </Slider>
        );
    }
}
