const enhancer = require('./enhancer.js');

describe('set up', () => {
    it('sanity checks', () => {
        expect(1 + 1).toBe(2)
        expect(1 + 1).not.toBe(3)
        expect(true).toBe(true)
        expect(false).not.toBe(true)
        expect([]).toBeTruthy()
        expect('').not.toBeTruthy()
        expect(5).toBeLessThan(6)
        expect(5).toBeGreaterThan(4)
        expect(undefined).not.toBeDefined()
        expect(null).toBeNull()
        expect(NaN).toBeNaN()
        expect({}).not.toBe({})
        expect({}).toEqual({})
    })
})


