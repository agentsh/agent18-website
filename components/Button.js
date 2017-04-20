import styled from 'styled-components';

const Button = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    background: white;
    border-radius: ${(props) => props.size / 2}px;

    cursor: pointer;

    > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-size: ${(props) => props.size / 3}px;
    }
`;

export default Button;
