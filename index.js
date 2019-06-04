#!/usr/bin/env node

const gtts = require('node-gtts');
const path = require('path');
const filepath = path.join(__dirname, 'hello.wav');
const player = require('play-sound')(opts = {});
const fs = require('fs');
const args = process.argv.splice(1);
const regLatino = /[^\u0000-\u00ff]/;

const checkNonLatino = (s) => regLatino.test(s);
const text_parts = args.splice(1);
const text = text_parts.join(' ');

if (checkNonLatino(text)) lang = 'zh-tw';
else lang = 'en';

gtts(lang).save(filepath, text, function() {
    player.play(filepath, (err) => {
        if (err) throw err;
        fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log('all done');
        });
    });
})

