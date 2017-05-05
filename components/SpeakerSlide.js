import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const SlideContent = styled.div`
    width: 360px;
    height: 360px;
    background: white;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    overflow: visible;
`;
const SlideInfo = styled.div`
    position: absolute;
    left: 290px;
    top: 65px;
    z-index: 100;
    width: 320px;
    color: white;
    transition: opacity 0.5;
`;
const SlideFilter = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:
    ${props => (props.active ? 'linear-gradient(153.43deg, rgba(0,0,0,0) 0%, #000000 100%)' : 'rgba(0,0,0,0.8)')};
    a, a:hover{
        font-size: 35px;
        color:white;
        text-decoration: none;
    }
`;

const SlideHeadline = styled.h3`
    font-family: Teko;
    font-size: 36px;
    line-height: 51px;
`;

const SlideSubHeadline = styled.h4`
    font-family: Teko;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 14px;
    margin-bottom: 30px;
`;
const SlideTeaser = styled.p`
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 30px;
`;

const SpeakerSlide = ({ speaker, active }) => {
    return (
        <SlideContent>
            <img src={speaker.imageUrl} />
            <SlideFilter active={active}>
                <SlideInfo active={active} style={{ opacity: active ? 1 : 0 }}>
                    <SlideHeadline>{speaker.name}</SlideHeadline>
                    <SlideSubHeadline>{speaker.title}</SlideSubHeadline>
                    <SlideTeaser>{speaker.teaser}</SlideTeaser>
                    <a href={`https://github.com/${speaker.github}`} target="_blank"><Icon name="github" /></a>
                </SlideInfo>
            </SlideFilter>
        </SlideContent>
    );
};

SpeakerSlide.propTypes = {
    speaker: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SpeakerSlide;
