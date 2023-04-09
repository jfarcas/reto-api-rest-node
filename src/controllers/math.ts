import {Get, Route, Tags, Post, Body, Path, Query} from "tsoa";
import { ICommonMultiple, IIncrementedNumber } from "../models";
import { Mathematical } from "../services/math";

@Route("math")
@Tags("Mathematical")
export default class MthController {
    @Get("/least-common-multiple")
    public getLeastCommonMultiple(@Query() numbers: number[]): ICommonMultiple {
        const math = new Mathematical();
        return math.getLeastCommonMultiple(numbers);
    }

    @Get("/increment")
    public getIncrementedNumber(@Query() number: number): IIncrementedNumber {
        const math = new Mathematical();
        return math.getIncrementedNumber(number,1);
    }
}
