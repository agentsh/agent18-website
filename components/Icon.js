import styled from 'styled-components';

const icons = {
    close: '\\e903',
    hamburger: '\\e90b',
    ticket: '\\e910',
    play: '\\e90c',
};

const Icon = styled.span`
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:before {
        content: "${props => icons[props.name]}";
    }
`;

export default Icon;
