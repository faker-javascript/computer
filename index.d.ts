interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class Computer {
    _osItems: Items;
    _typeItems: Items;
    _platformItems: Items;
    _defaultLocale: string;
    _options?: Options;
    os(): string;
    type(): string;
    platform(): string;
    _selectRandom(items: Items): string;
}
export default function computer(options?: Options): Computer;
