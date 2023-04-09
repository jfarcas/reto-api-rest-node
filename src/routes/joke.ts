import express from "express";
import JokeController from "../controllers/joke";
import {ApiError} from "../models/error";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new JokeController();
    const response = await controller.getJokes();
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new JokeController();
    const response = await controller.createJoke(req.body);
    return res.send(response);
});

router.get("/:number", async (req, res) => {
    const controller = new JokeController();
    const response = await controller.getJoke(req.params.number);
    if (!response) return res.status(404).send(new ApiError('notFound', 'Joke Not Found', 'Error', 404, []));
    return res.send(response);
});

router.put("/:number", async (req, res) => {
    const controller = new JokeController();
    console.log('Por aqui en el router llega')
    const response = await controller.updateJoke(req.body, req.params.number);
    if (!response) return res.status(404).send(new ApiError('notFound', 'Joke Not Found', 'Error', 404, []));
    return res.status(200).send(response);
});

router.delete("/:number", async (req, res) => {
    const controller = new JokeController();
    console.log('Por aqui en el router llega')
    const response = await controller.deleteJoke(req.params.number);
    if (!response) return res.status(404).send(new ApiError('notFound', 'Joke Not Found', 'Error', 404, []));
    return res.status(204).send(null);
});

router.get("/by-types/:type", async (req, res) => {
    const controller = new JokeController();
    try {
        const response = await controller.getJokesByType(req.params.type);
        if (!response) return res.status(400).send(new ApiError('badRequest', 'Invalid Query Params', 'Error', 400, []));
        return res.send(response);
    } catch (error) {
        if (error instanceof Error) {
            const message = error.message;
            return res.status(400).send(new ApiError('badRequest', message, 'Error', 400, []));
        }
        return res.status(500).send(    new ApiError('unknownError', 'Unknown Error. Please try again later', 'Server Error', 500, []));
    }

});

router.get("/random", async (req, res) => {
    const controller = new JokeController();
    const response = await controller.getRandomJoke();
    if (!response) return res.status(400).send(new ApiError('badRequest', 'Invalid Query Params', 'Error', 400, []));
    return res.send(response);
});

export default router;
