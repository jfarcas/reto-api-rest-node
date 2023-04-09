import {Get, Route, Tags, Post, Delete, Body, Path, Query, Put} from "tsoa";
import { Joke } from "../models";
import {ChuckJokeProvider, DadJokeProvider, JokeProviderFactory} from "../services/joke-factory"
import {
    getJoke,
    createJoke,
    deleteJoke,
    updateJoke,
    IJokePayload,
    getJokes,
} from "../repositories/joke";
import {ApiJoke} from "../models/api-joke";

@Route("jokes")
@Tags("Jokes")
export default class JokeController {
    @Get("/")
    public async getJokes(): Promise<Array<Joke>> {
        return getJokes();
    }

    @Get("/by-types/:type")
    public async getJokesByType(@Path() type: string): Promise<ApiJoke> {
        const jokeProvider:DadJokeProvider|ChuckJokeProvider = JokeProviderFactory.createJokeProvider(type)
        return await jokeProvider.getJoke();
    }

    @Get("/random")
    public async getRandomJoke(): Promise<ApiJoke> {
        const jokeProvider:DadJokeProvider|ChuckJokeProvider = JokeProviderFactory.createJokeProvider("random")
        return await jokeProvider.getJoke();
    }


    @Post("/")
    public async createJoke(@Body() body: IJokePayload): Promise<Joke> {
        return createJoke(body);
    }

    @Put("/:number")
    public async updateJoke(@Body() body: IJokePayload, number: string): Promise<Joke> {
        return updateJoke(body, Number(number));
    }

    @Get("/:number")
    public async getJoke(@Path() number: string): Promise<Joke | null> {
        return getJoke(Number(number));
    }

    @Delete("/:number")
    public async deleteJoke(@Path() number: string): Promise<string | null> {
        console.log('Por aqui llega')
        return deleteJoke(Number(number));
    }
}
