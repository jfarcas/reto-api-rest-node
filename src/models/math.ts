export interface ICommonMultiple {
    numbers: number[];
    leastCommonMultiple: number;
}
export interface IIncrementedNumber {
    number: number;
    incrementedNumber: number;
}


export class IncrementedNumber implements IIncrementedNumber {
    number: number
    incrementedNumber: number

    constructor(number: number, incrementedNumber: number) {
        this.number = number;
        this.incrementedNumber = incrementedNumber;
    }
}

export class CommonMultiple implements ICommonMultiple {
    numbers: number[]
    leastCommonMultiple: number

    constructor(numbers: number[], leastCommonMultiple: number) {
        this.numbers = numbers;
        this.leastCommonMultiple = leastCommonMultiple;
    }
}
