import React, { Component } from 'react';
import '../styles/Square.css';
import { black, white } from '../utils/colors';

class Square extends Component {

    render() {
        const { color, children } = this.props;

        return (
            <div className="square"
                style={
                    {
                        backgroundColor: color,
                        color: color === black ? white : black
                    }
                }>
                {children}
            </div>
        );
    }
}

export default Square;