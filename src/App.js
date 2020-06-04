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
    const [title, setTitle] = React.useState('Penguin');

    const addPenguin = () => {
        setTitle(title + '🐧');
    };

    return (
        <Image
            title={title}
            file={penguinFromFile}
            buttons={
                <ButtonGroup>
                    <Button onClick={addPenguin}>Add penguin</Button>
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
