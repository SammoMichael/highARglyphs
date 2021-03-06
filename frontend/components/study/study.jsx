import React from 'react';
import CardStudyItem from '../card/card_study_item';

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currIdx: 0, flipped: true };  
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickFlip = this.handleClickFlip.bind(this);
    }   
    
    componentDidMount() {  
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId);
        document.addEventListener('keydown', this.handleKeydown);
    }

    handleClickFlip() {
        (this.state.flipped ?
            this.setState({ flipped: false }) :
            this.setState({ flipped: true }));
    }

    handleClickNext() {
        // debugger
        console.log(this.state.currIdx)
        this.setState({ numCards: this.props.cards.length })
        console.log(this.state.numCards)
        const newIdx = (this.state.currIdx + 1) % this.props.cards.length;
        this.setState({ currIdx: newIdx }); 
        console.log(this.state.currIdx)
        this.setState({ flipped: true }); 
    }

    render() {
        const card = Object.values(this.props.cards)[this.state.currIdx] || {};        
        return (
                <>
                <h1></h1>
                <span className='flashcard-box' onClick={this.handleClickFlip}>
            <CardStudyItem
                className="card-study-item"
                flipped={this.state.flipped}
                front={card.front}
                back={card.back}
                deckId={card.deckId} />
                </span>
                <button className='flipper-button' onClick={this.handleClickFlip}>Flip Me</button>
                <button className='next-button' onClick={this.handleClickNext}>
                    <span className="next">Next</span>
                <br></br>
                    <span className="card-count"> {this.state.currIdx + 1} of {this.state.numCards} 
                    
                    </span>
                </button>
               </>
        );
    }
}

export default Study; 