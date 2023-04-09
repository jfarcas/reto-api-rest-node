
import axios from "axios"
import {ApiJoke, IApiJoke, IChuckApiJoke} from "../models/api-joke";

interface JokeProvider {
    getJoke():Promise<IApiJoke>
}
export class DadJokeProvider implements JokeProvider {
    async getJoke():Promise<IApiJoke> {
        // todo catch errors
        return await axios.get<ApiJoke>(
           'https://icanhazdadjoke.com/',
           {
           headers: {
               "Accept": 'application/json',
               "User-Agent":"My - App"
           },
        }).then( response => {
            console.log(response.data);
            console.log(response.status);
            const data = response.data;
            return new ApiJoke(data.id, data.joke, 'custom');
        })
    }
}

export class ChuckJokeProvider implements JokeProvider {
    async getJoke():Promise<IApiJoke> {
        // todo catch errors
        return await axios.get<IChuckApiJoke>(
            'https://api.chucknorris.io/jokes/random',
            {
                headers: {
                    "Accept": 'application/json',
                    "User-Agent":"My - App"
                },
            }).then( response => {
            const data = response.data;
            return new ApiJoke(data.id, data.value, 'custom');
        })
    }
}
export class JokeProviderFactory {

    static createJokeProvider(type: string): JokeProvider {
        const jokeTypes:Array<string> = ['dad', 'chuck']
        const getRandomElement = (arr: string[]) =>
            arr[Math.floor(Math.random() * arr.length)]

        if (type === "random") {
            type = getRandomElement(jokeTypes)
        }

        if (type === 'dad') {
            return new DadJokeProvider()
        } else if (type === 'chuck') {
            return new ChuckJokeProvider()
        } else {
            throw new Error('Type not supported');
        }
    }
}
