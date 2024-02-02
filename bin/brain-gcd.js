#!/usr/bin/env node

import greeting from "../src/cli.js";
import brainGcd from "../games/brain-gcd.js";

let name = greeting();

brainGcd(name);
