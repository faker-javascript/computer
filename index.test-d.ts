import {expectType} from 'tsd';
import computer from './index.js';

expectType<string>(computer({locale: 'en_US'}).os());
expectType<string>(computer().os());
expectType<string>(computer().platform());
expectType<string>(computer().type());
