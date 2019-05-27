import React,{Component} from 'react';
import Board from "./Board";
import './style.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).sill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }
    render() {
        const history = this.state.history;
        const current = history[history.state.stepNumber];
        const winner = calculateWinner(current,squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner){
            stutas = 'Winner: ' + winner;
        } else {
            status = 'Next palyer: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-into">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;

