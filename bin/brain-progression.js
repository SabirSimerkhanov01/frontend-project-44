#!/usr/bin/env node

import brainProgression from '../games/brain-progression.js';
import greeting from '../src/cli.js';

const name = greeting();

brainProgression(name);
