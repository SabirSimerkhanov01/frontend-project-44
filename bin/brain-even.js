#!/usr/bin/env node

import greeting from "../src/cli.js";
import brainEven from "../games/brain-even.js";

let name = greeting();

brainEven(name);
