import React,{Component} from 'react';
import Board from "./Board";
import './style.css'



class Game extends React.Component {
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-into">
                    <div>{/*status*/}</div>
                    <ol>{/*todo*/}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
