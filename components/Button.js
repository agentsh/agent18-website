import styled from 'styled-components';

const Button = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    background: white;
    border-radius: ${(props) => props.size / 2}px;

    cursor: pointer;
`;

export default Button;
