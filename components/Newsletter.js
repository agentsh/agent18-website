import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
const Form = styled.form`
    height: 100px;
    padding:20px 10px 10px 10px;
`;
const Input = styled.input`
    padding:0 10px;
    height: 44px;
    font-size: 22px;
    line-height: 22px;
    width: 300px;
    font-family: Teko;
    border: 0;
    display:inline-block;
`;
const Submit = styled.input`
    padding:0 10px;
    font-size: 22px;
    line-height: 22px;
    width: 100px;
    font-family: Teko;
    background: #000;
    color: white;
    border:0;
    height:45px;
    display:inline-block;
`;

export default class Newsletter extends React.PureComponent {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {email: null};
    }
    handleEmailChanged = event => {
        this.setState({email: event.target.source});
    };
    render() {
        return (
            <div>
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
                        placeholder="register for Newsletter" />
                    <Submit
                        type="submit"
                        value="Get notified"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        style={{outline: 'none'}}
                        disabled={this.state.email === '' || this.state.email === null} />

                    <input type="hidden" name="b_f761e3205081ca3832180ad93_b3e4e5cec0" tabIndex="-1" />
                </Form>
            </div>
        );
    }
}
