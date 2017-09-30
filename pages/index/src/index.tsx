import * as React from "react";
import { render } from 'react-dom';

interface IIndexComponentState {
    activeGame: string;
}

class IndexComponent extends React.Component<any, IIndexComponentState> {

    constructor(props: any) {
        super(props);

        this.state = {
            activeGame: ''
        }

        this.selectGame = this.selectGame.bind(this);
    }

    private setActiveGame(game: string) {
        this.setState({
            activeGame: game
        });
    }

    private selectGame() {
        document.location.href = '/' + this.state.activeGame + '/';
    }

    render() {
        return (
            <div className='index-main'>
                {
                    this.state.activeGame !== '' ?
                        <div className={'index-background index-background-' + this.state.activeGame} /> : 
                        <div></div>
                }
                <div className='index-background-overlay' />

                <div className='index-content'>
                    <div className='index-title'>
                        <span>Select Your Game</span>
                    </div>
                    <div className='index-button'
                        onMouseEnter={() => this.setActiveGame('ww2')}
                        onClick={this.selectGame}>
                        <span>World War II</span>
                    </div>
                    <div className='index-button'
                        onMouseEnter={() => this.setActiveGame('iw')}
                        onClick={this.selectGame}>
                        <span>Infinite Warfare</span>
                    </div>
                </div>
            </div>
        );
    }

}

render(
    <IndexComponent />,
    document.getElementById('container')
);
