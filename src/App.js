import React from 'react';
import fs from 'fs';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import logo from './assets/logo.png';

const logoFileStream = fs.createReadStream(logo);

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

function Logo() {
    const [title, setTitle] = React.useState('Logo');

    const addRobot = () => {
        setTitle(title + '🤖');
    };

    return (
        <Image
            title={title}
            file={logoFileStream}
            buttons={
                <ButtonGroup>
                    <Button onClick={addRobot}>Add robot</Button>
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
                <Logo />
            </Route>
        </Router>
    );
}
