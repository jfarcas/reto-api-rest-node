import express from "express";
import MathController from "../controllers/math";
import {ApiError} from "../models/error";

const router = express.Router();

router.get("/least-common-multiple",  (req, res) => {
    const arrNumbers = req.query.numbers;
    console.log(typeof arrNumbers)
    console.log(arrNumbers)
    if (typeof arrNumbers !== "undefined" && Array.isArray(arrNumbers)) {

        let isValidData = true;
        let numbers: number[] = [];
        arrNumbers.forEach((number) => {
            if (typeof number === 'string') {
                if (typeof parseInt(number) === 'number') {
                    numbers.push(parseInt(number));
                } else {
                    isValidData = false;
                }
            }
            })
        if (isValidData) {
            const controller = new MathController();
            const response = controller.getLeastCommonMultiple(numbers);
            return res.send(response);
        }
    }
     return res.status(400).send(new ApiError('badRequest', 'Invalid Query Params', 'Error', 400, []));

});

router.get("/increment",  (req, res) => {
    const paramNumber = req.query.number;
    console.log('Parametro numbre es ', paramNumber);
    if (typeof paramNumber === "string") {
        const number: number = parseInt(paramNumber)
        const controller = new MathController();
        const response = controller.getIncrementedNumber(number);
        return res.send(response);
    }
    return res.status(400).send(new ApiError('badRequest', 'Invalid Query Params', 'Error', 400, []));
});

export default router;
