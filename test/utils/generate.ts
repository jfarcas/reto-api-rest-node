import {faker} from '@faker-js/faker';
import {Joke} from "../../src/models";
import {IJokePayload} from "../../src/repositories/joke";

export function generateJokeData(overide:Joke[] = []) {
    const joke = new Joke()
        joke.number = parseInt(faker.random.numeric());
        joke.joke = faker.random.words(10);
        joke.type = "custom"
    overide.push(joke);
    return overide;
}

export function generateJoke(number: number):Joke {
    const joke = new Joke()
    joke.number = number;
    joke.joke = faker.random.words(10);
    joke.type = "custom"
    return joke;
}

export function generateJokePostData(payload: IJokePayload, number?:number):Joke {
    const joke = new Joke()
    joke.joke = payload.joke;
    joke.type = payload.type;
    if (number === undefined) {
        joke.number = parseInt(faker.random.numeric())
    } else {
        joke.number = number
    }
    return joke;
}

export function generateJokePostPayload():IJokePayload {
    const joke = new Joke()
    joke.joke = faker.random.words(10);
    joke.type = "custom"

    return joke;
}

export function generateJokesData(n: number = 1, overide: Joke[] = []): Joke[] {

    for (let i = 0; i < n; i++) {
        overide = generateJokeData(overide)
    }
    return overide;
}

export function generateJokePayload() {
    return {
        joke: faker.random.words(10),
        type: "custom",
    }
}
