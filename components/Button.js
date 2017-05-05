import styled from 'styled-components';

const size = 40;

const Button = styled.div`
    width: ${size}px;
    height: ${size}px;

    background: white;
    border-radius: ${size / 2}px;

    cursor: pointer;

    > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-size: ${size / 3}px;
    }
`;

export default Button;
