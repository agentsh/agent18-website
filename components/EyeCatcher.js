import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';

const EyeCatcherContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 50vh;
    right: 0;

    ${(props) => !props.isOpen ? 'width: 30px;' : ''}

    padding: ${(props) => props.isOpen ? '25px 40px' : '0'};
    margin-top: -${(props) => props.height / 2}px;

    background-color: #000000;
    border-radius: 10px 0 0 10px;

    color: #ffffff;
    font-size: 16px;
    line-height: 30px;
`;

const TogglerIcon = styled(Icon)`
    float: right;
`;

export default class EyeCatcher extends React.PureComponent {
    static propTypes = {
        children: PropTypes.func.isRequired,
    };

    state = {
        containerHeight: 0,
        isOpen: true,
    };

    setContainerHeight = (container) => {
        this.setState({containerHeight: container.offsetHeight});
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <EyeCatcherContainer
                innerRef={this.setContainerHeight}
                height={this.state.containerHeight}
                isOpen={this.state.isOpen}>
                <TogglerIcon name="forward" onClick={this.handleToggle} />
                {this.props.children(this.state.isOpen)}
            </EyeCatcherContainer>
        );
    }
}
