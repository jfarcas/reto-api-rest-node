import MathController from "./math"

const incrementData = [
    {
        number: 5,
        incremented: 6,
    },
    {
        number: 3,
        incremented: 4,
    },
    {
        number: 0,
        incremented: 1,
    },
    {
        number: -5,
        incremented: -4,
    }
];
const lcmData = [
    {
        'input': [1,2,3,4,7],
        'expected': 84
    },
    {
        'input': [12,15,75,9],
        'expected': 900
    },
    {
        'input': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        'expected': 720720
    }
]

describe.each(incrementData)(`Incremented Number`,  (data) => {
     it(`Incremented number for  ${data.number} should be ${data.incremented}`,(done) => {
        const controller = new MathController();
        const response = controller.getIncrementedNumber(data.number);
        expect(response.incrementedNumber).toBe(data.incremented);
        done();
    });
});

describe.each(lcmData)(`Least common multiple`,  (data) => {
    it(`Least common multiple for  ${JSON.stringify(data.input)} should be ${data.expected}`, (done) => {
        const controller = new MathController();
        const response = controller.getLeastCommonMultiple(data.input);
        expect(response.leastCommonMultiple).toBe(data.expected);
        done();
    });
});
