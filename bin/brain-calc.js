#!/usr/bin/env node

import greeting from "../src/cli.js";
import brainCalc from "../games/brain-calc.js";

let name = greeting();

brainCalc(name);
