# README

* [highARglyphs](https://higharglyphs.herokuapp.com) is a web application for creating and studying flashcards. Inspired by Brainscape, I decided to take a more minimalistic direction and bring my app into the 21st century by integrating speech recognition and 3d AR flashcards(a work in progress).
 
![Screenshot](
      app/assets/images/highARglyphs.gif
      )

## Technology
* Ruby on Rails backend, with data stored using PostgreSQL
* React and Redux frontend, for a single-page app
* Augmented Reality and Speech Recognition with JavaScript libraries

## Key Features
### Card creation, deletion, initialization and conditional update

```JavaScript
handleClickNew(e) {
        e.preventDefault();
        this.setState({ cards: (this.state.cards)
            .concat([{ deckId: this.props.match.params.deckId }]) });
    }

    handleClickDelete(card, idx) {
        const state = merge({}, this.state);
        state.cards.splice(idx, 1);
        if (card.id) {
            this.props.deleteCard(card.id);
        }
        this.setState(state);
    }

    update(field, idx) {
        return e => {
            const state = merge({}, this.state);
            state.cards[idx][field] = e.currentTarget.value;
            this.setState(state);
        };
    }
    
    reset() {
        this.setState({ cards: this.state.oldState });
    }

    makeBlank() {
        if (!this.state.cards.length) {
            this.setState({
                cards: (this.state.cards)
                    .concat([{ deckId: this.props.match.params.deckId }]),
                oldState: (this.state.cards)
                    .concat([{ deckId: this.props.match.params.deckId }]) });
        }
    }
    handleSearch(e) {
        this.setState({ searchString: e.currentTarget.value });
        if (e.currentTarget.value !== '') {
            this.props.searchDecks(this.state.transcript);
        } else {
            this.props.searchDecks(e.currentTarget.value.toLowerCase());
        }
    }
```
## Future Directions
### Finalize user interface for AR 3D flashcard decks



