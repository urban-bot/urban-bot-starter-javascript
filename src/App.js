import React, { useState } from 'react';
import fs from 'fs';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import logoPath from './assets/logo.png';

const logoFile = fs.readFileSync(logoPath);

function Echo() {
    const [text, setText] = useState('Say something');

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
    const [title, setTitle] = useState('Logo');

    const addRobot = () => {
        setTitle(title + '🤖');
    };

    return (
        <Image
            title={title}
            file={logoFile}
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
