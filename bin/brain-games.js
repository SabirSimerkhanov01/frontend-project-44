#!/usr/bin/env node

import { name } from '../src/cli.js';

const one = `May I have your name? ${name}`;
const fir = `Hello, ${name}!`;

console.log('Welcome to the Brain Games!');
console.log(one);
console.log(fir);
