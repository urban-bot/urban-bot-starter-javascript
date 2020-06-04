import React from 'react';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import penguinFromFile from './assets/penguin.jpg';

function Echo() {
    const [text, setText] = React.useState('Say something');

    useText(({ text }) => {
        setText(text);
    });

    return (
        <Text>
            <i>{text}</i>
        </Text>
    );
}

function Counter() {
    const [image, setImage] = React.useState(penguinFromFile);
    const penguinFromURL = 'https://ibb.co/GR241dP';

    const toggleImage = () => {
        const nextImage = image === penguinFromFile ? penguinFromURL : penguinFromFile;
        setImage(nextImage);
    };

    return (
        <Image
            title="Penguin"
            file={image}
            buttons={
                <ButtonGroup>
                    <Button onClick={toggleImage}>Toggle penguin</Button>
                </ButtonGroup>
            }
        />
    );
}

export function App() {
    return (
        <Router>
            <Route path="/start">
                <Echo />
            </Route>
            <Route path="/image">
                <Counter />
            </Route>
        </Router>
    );
}
