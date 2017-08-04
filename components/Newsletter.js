import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Form = styled.form`
    padding: 0 0 80px 0;
`;

const Input = styled.input`
    width: 50%;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: white;
    font-family: Teko;
    font-size: 28px;
    line-height: 40px;
    text-transform: uppercase;

    &::placeholder {
        color: white;
    }
`;

const Submit = styled.button`
    font-size: 22px;
    line-height: 22px;
    font-family: Teko;
    background: transparent;
    color: white;
    border:0;
    height:45px;
    margin-left: -15px;
    display:inline-block;
`;

export default class Newsletter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {email: null};
    }

    handleEmailChanged = event => {
        this.setState({email: event.target.source});
    };

    render() {
        return (
            <Form
                action="//agent.us14.list-manage.com/subscribe/post?u=f761e3205081ca3832180ad93&amp;id=b3e4e5cec0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate>

                <Input
                    type="email"
                    onChange={this.handleEmailChanged}
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Sign our newsletter" />
                <Submit
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    style={{outline: 'none'}}
                    disabled={this.state.email === '' || this.state.email === null}>
                    <Icon name="forward" size={12} />
                </Submit>

                <input type="hidden" name="b_f761e3205081ca3832180ad93_b3e4e5cec0" tabIndex="-1" />
            </Form>
        );
    }
}
