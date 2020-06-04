import React from 'react';
import fs from 'fs';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import penguinFile from './assets/penguin.jpg';

const penguinFileStream = fs.createReadStream(penguinFile);

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
            file={penguinFileStream}
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
