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

describe('repair method', () => {
    const testItem = { name: 'hammer', durability: 5, enhancement: 15 } 
    const repairOutput = enhancer.repair(testItem)

    it('method is defined', () => {
        expect(enhancer.repair).toBeDefined()
    })

    it('returns obj', () => {
        expect(repairOutput).toBeInstanceOf(Object)
    })

    it('returns new obj', () => {
        expect(repairOutput).not.toBe(testItem)
    })
    
    it('returns obj with correct key value pairs', () =>{
        expect(repairOutput).toHaveProperty('name', 'hammer')
        expect(repairOutput).toHaveProperty('durability', 100)
        expect(repairOutput).toHaveProperty('enhancement', 15)
    })

    it('name is of type string', () => {
        expect(typeof repairOutput.name).toBe('string')
    })

    it('durability and enhancement are of type number', () => {
        expect(typeof repairOutput.durability).toBe('number')
        expect(typeof repairOutput.enhancement).toBe('number')
    })

    it('sets durability to 100', () => {
        expect(repairOutput.durability).toBe(100)
        expect(repairOutput.name).toEqual(testItem.name)
        expect(repairOutput.enhancement).toEqual(testItem.enhancement)
    })
})

describe('success method', () => {
    
})