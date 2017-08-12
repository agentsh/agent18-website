import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EyeCatcherContainer = styled.div`
    position: fixed;
    top: 50vh;
    right: 0;
    padding: 25px 40px;
    margin-top: -${(props) => props.height / 2}px;

    background-color: #000000;
    border-radius: 10px 0 0 10px;

    color: #ffffff;
    font-size: 16px;
    line-height: 30px;
`;

export default class EyeCatcher extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        containerHeight: 0,
    };

    setContainerHeight = (container) => {
        this.setState({containerHeight: container.offsetHeight});
    };

    render() {
        return (
            <EyeCatcherContainer innerRef={this.setContainerHeight} height={this.state.containerHeight}>
                {this.props.children}
            </EyeCatcherContainer>
        );
    }
}
