<h1 align="center">Computer</h1>
<p align="center">Computer package provides functionality to generate a fake computer value.</p>

<p align="center">
<a href="https://github.com/faker-javascript/computer/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/computer.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/computer"> <img alt="node-current" src="https://img.shields.io/node/v/@fakerjs/computer"> <a href="https://github.com/faker-javascript/computer/actions/workflows/ci.yml"><img src="https://github.com/faker-javascript/computer/actions/workflows/ci.yml/badge.svg"></a> <a href="https://github.com/faker-javascript/computer"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a>
</p>

## Install

npm
```
npm install @fakerjs/computer --save-dev
```

yarn
```
yarn add @fakerjs/computer -D
```

## Usage

```js
import computer from '@fakerjs/computer';

computer({locale: 'en_US'}).os();
//=> Catalina (10.15)
// Allowed locale: en_US

computer().os();
//=> Catalina (10.15) 

computer().platform();
//=> macOS

computer().type();
//=> workstation 
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/computer/blob/master/LICENSE)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
