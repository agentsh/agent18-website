import React from 'react';
import PropTypes from 'prop-types';

export default class Sponsor extends React.Component {
    static propTypes = {
        website: PropTypes.string,
        logo: PropTypes.string,
    };
    render() {
        return (
            <a href={this.props.website}>
                <img src={this.props.logo} />
            </a>
        );
    }
}
