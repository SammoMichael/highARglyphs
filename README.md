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
    
### 3D AR Flashcards
* AR.js javaScript Augmented Library implemented inside a React component 
* gltf and obj 3D model formats are supported for convenient study by doctors, engineers and other spatially complex research fields
```javaScript


import React from 'react';
import Back from './back';

const Ar = () => {
    
    return (
        <>
        <div>
            {/* <Back /> */}
            <button id="myBtn">
                HIDE OBJECTS
	</button>
        </div>
            <a-scene embedded arjs='trackingMethod: best;'>
                <a-gltf-model src="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf"></a-gltf-model>
                <a-marker-camera preset='hiro'></a-marker-camera>
                <a-camera-static />
            </a-scene>
    <a-scene embedded arjs='trackingMethod: best;'>

	<a-anchor hit-testing-enabled='true'>

		<a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
                <a-torus-knot radius='0.26' radius-tubular='0.05'>
                    <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
                </a-torus-knot>
            </a-box>

        </a-anchor>

	<a-camera-static />

    </a-scene></>
    );
};

export default Ar;
```
## Future Directions
### Finalize user interface for AR 3D flashcard decks



