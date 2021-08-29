const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")
const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("handleClick", () => {
    let inst

    beforeEach(() => {
        inst = new Game()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner([11, 0, 100, 0, 2, 100, 10.0, 1, 0, 0, 1, 103, 2, 103, 103, 0, 10, 100, 100, 103])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner([10.0, 1, 103, 100, 100, 256, 10, 10, 10, 10.0, 10.0, 1, 10.0, 1, 10.0, 10, 0, 11, 100, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner([2, 100, 2, 10.0, 2, 10.0, 100, 2, 256, 10.0, 1, 2, 11, 10, 100, 256, 0, 100, 11, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner([1, 100, 103, 100, 100, 1, 10.0, 100, 103, 103, 10, 2, 10, 1, 10, 2, 256, 103, 256, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner([0, 1, 256, 10, 1, 256, 256, 2, 256, 256, 103, 1, 100, 10, 103, 256, 1, 11, 100, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
