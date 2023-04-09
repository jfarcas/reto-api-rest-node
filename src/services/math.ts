import {ICommonMultiple, IIncrementedNumber} from "../models";
import {CommonMultiple, IncrementedNumber} from "../models/math";

export class Mathematical {
    getLeastCommonMultiple(numbers: Array<number>):ICommonMultiple {

        function greatestCommonDivisor(firstNumber: number, secondNumber: number): number {
            return secondNumber === 0 ? firstNumber : greatestCommonDivisor(secondNumber, firstNumber % secondNumber);
        }

        function leastCommonMultiple(firstNumber: number, secondNumber: number): number {
            return (firstNumber * secondNumber) / greatestCommonDivisor(firstNumber, secondNumber);
        }

        let commonMultiple = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            commonMultiple = leastCommonMultiple(commonMultiple, numbers[i]);
        }

        return new CommonMultiple(numbers, commonMultiple);
    }

    getIncrementedNumber(number: number, increment: number):IIncrementedNumber {
        const incrementedNumber = number + increment;
        return new IncrementedNumber(number, incrementedNumber);
    }
}
