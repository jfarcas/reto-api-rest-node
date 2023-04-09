export interface IApiJoke {
    id: string;
    joke: string;
    type: string;
}
export interface IChuckApiJoke {
    id: string;
    value: string;
    type: string;
}


export class ApiJoke {
    id: string
    joke: string
    type: string
    constructor(id: string, joke: string, type: string) {
        this.id = id;
        this.joke = joke;
        this.type = type;
    }

}
