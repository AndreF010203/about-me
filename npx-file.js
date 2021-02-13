#! /usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');
const url = 'https://github.com/AndreF010203/about-me.git';

spawnSync('git', ['clone', url]);
spawnSync('npm', ['install']);
spawnSync('npm', ['run build']);

console.log('About-me has been successfully installed in the about_me folder');
