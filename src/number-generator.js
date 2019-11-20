#!/usr/bin/env node
const numberGenerator = (max, min) => (Math.floor(Math.random() * (max - min)) + min);

export default numberGenerator;
