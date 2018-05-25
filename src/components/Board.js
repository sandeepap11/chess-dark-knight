import React, { Component } from 'react';
import Square from './Square';
import '../styles/Board.css';
import { black, white } from '../utils/colors';

class Board extends Component {

    state = {
        position: { i: 1, j: 0 }
    };

    knightMover = (square) => {

        const { position } = this.state;

        if (((Math.abs(position.i - square.i) + Math.abs(position.j - square.j)) === 3)
            && (position.i !== square.i) && (position.j !== square.j)) {
            this.setState({ position: square });
        }

    };


    render() {

        const { position } = this.state;
        const knight = "♞";

        let squares = [];
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {

                squares.push({ i, j });
            }

        }

        return (
            <div className="board">
                {
                    squares.map((square, index) => (
                        <div key={index} onClick={() => this.knightMover(square)}>
                            <Square color={(square.i + square.j) % 2 === 0 ? white : black}>

                                {
                                    (square.i === position.i && square.j === position.j) && knight
                                }

                            </Square>
                        </div>
                    ))
                }

            </div>
        );
    }
}

export default Board;