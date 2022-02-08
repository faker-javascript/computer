import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class Computer {
    _osItems = {};
    _typeItems = {};
    _platformItems = {};
    _defaultLocale = 'en_US';
    _options = {};

    constructor(options) {
        this._options = options || {};
        const osFilePath = `./locales/${this._options.locale || this._defaultLocale}/os.json`;
        const typeFilePath = `./locales/${this._options.locale || this._defaultLocale}/type.json`;
        const platformFilePath = `./locales/${this._options.locale || this._defaultLocale}/platform.json`;
        this._osItems = fs.existsSync(path.resolve(osFilePath)) ? loadJsonFileSync(osFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/computer/', osFilePath));
        this._typeItems = fs.existsSync(path.resolve(typeFilePath)) ? loadJsonFileSync(typeFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/computer/', typeFilePath));
        this._platformItems = fs.existsSync(path.resolve(platformFilePath)) ? loadJsonFileSync(platformFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/computer/', platformFilePath));
    }

    _selectRandom(Itemss) {
        return Itemss[Math.floor(Math.random() * Itemss.length)];
    }

    os() {
        return this._selectRandom(this._osItems);
    }

    type() {
        return this._selectRandom(this._typeItems);
    }

    platform() {
        return this._selectRandom(this._platformItems);
    }
}

export default function Computer(options) {
    return new Computer(options);
}
