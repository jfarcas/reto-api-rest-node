import { AppDataSource } from "../index";
import { Joke } from "../models";

export interface IJokePayload {
    joke: string;
    type: string;
}

export const getJokes = async (): Promise<Array<Joke>> => {
    const jokeRepository = AppDataSource.getRepository(Joke);
    return jokeRepository.find();
};

export const createJoke = async (payload: IJokePayload): Promise<Joke> => {
    const jokeRepository = AppDataSource.getRepository(Joke);
    const joke = new Joke();
    return jokeRepository.save({
        ...joke,
        ...payload,
    });
};

export const updateJoke = async (payload: IJokePayload, number: number): Promise<Joke> => {
    const jokeRepository = AppDataSource.getRepository(Joke);
    const joke = await jokeRepository.findOneBy({ number: number });
    return jokeRepository.save({
        ...joke,
        ...payload,
    });
};

export const getJoke = async (number: number): Promise<Joke | null> => {
    const jokeRepository = AppDataSource.getRepository(Joke);
    const joke = await jokeRepository.findOneBy({ number: number });
    if (!joke) return null;
    return joke;
};

export const deleteJoke = async (number: number): Promise<string|null> => {
    const jokeRepository = AppDataSource.getRepository(Joke);
    const joke = await jokeRepository.delete({ number: number });
    if (!joke) return null;
    return 'Deleted';
};

