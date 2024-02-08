#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainPrime from "../games/brain-prime.js";

let name = greeting();

brainPrime(name);
