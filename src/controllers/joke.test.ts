import JokeController from "./joke"
import * as JokeRepository from "../repositories/joke"
import {Joke} from "../models";
import {
    generateJokePostData,
    generateJokePostPayload,
    generateJokesData,
    generateJoke
} from "../../test/utils/generate";
import joke from "../routes/joke";

afterEach(() => {
    jest.resetAllMocks();
});
describe("JokeController", () => {
    describe("getJokes", () => {
        it("should return empty array", async () => {
            const spy = jest
                .spyOn(JokeRepository, "getJokes")
                .mockResolvedValueOnce([]);
            const controller = new JokeController();
            const jokes = await controller.getJokes();
            expect(jokes).toEqual([]);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

        test("should return joke list", async () => {
            const jokeList = generateJokesData(5);
            expect(true).toBeTruthy();
            const spy = jest
                .spyOn(JokeRepository, "getJokes")
                .mockResolvedValueOnce(jokeList);
            const controller = new JokeController();
            const jokes = await controller.getJokes();
            expect(jokes).toEqual(jokeList);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });


    });
    describe("addJoke", () => {
        test("should add joke to the database", async () => {
            const payload = generateJokePostPayload();
            const jokeData = generateJokePostData(payload);
            const spy = jest
                .spyOn(JokeRepository, "createJoke")
                .mockResolvedValueOnce(jokeData);
            const controller = new JokeController();
            const joke = await controller.createJoke(payload);
            expect(joke).toMatchObject(payload);
            expect(joke).toEqual(jokeData);
            expect(spy).toHaveBeenCalledWith(payload);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("getJoke ", () => {
        test("should return joke from the database", async () => {
            const id = 1;
            const jokeData = generateJoke(id);
            const spy = jest
                .spyOn(JokeRepository, "getJoke")
                .mockResolvedValueOnce(jokeData);
            const controller = new JokeController();
            const joke = await controller.getJoke(id.toString());
            expect(joke).toEqual(jokeData);
            expect(joke?.number).toBe(id);
            expect(spy).toHaveBeenCalledWith(id);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("should return null if joke not found", async () => {
            const id = 1;
            const spy = jest
                .spyOn(JokeRepository, "getJoke")
                .mockResolvedValueOnce(null);
            const controller = new JokeController();
            const joke = await controller.getJoke(id.toString());
            expect(joke).toBeNull();
            expect(spy).toHaveBeenCalledWith(id);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("updateJoke", () => {
        test("should update joke in the database", async () => {
            const payload = generateJokePostPayload();
            const jokeData = generateJokePostData(payload, 1);
            const spy = jest
                .spyOn(JokeRepository, "updateJoke")
                .mockResolvedValueOnce(jokeData)
            const controller = new JokeController();
            const joke = await controller.updateJoke(payload, "1");
            expect(joke).toMatchObject(payload);
            expect(joke).toEqual(jokeData);
            expect(spy).toHaveBeenCalledWith(payload, 1);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
