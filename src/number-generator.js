#!/usr/bin/env node
const generate = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export default generate;
