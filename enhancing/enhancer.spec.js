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
    const testItem = { name: 'hammer', durability: 5, enhancement: 15 } 
    const successOutput = enhancer.success(testItem)

    it('method is defined', () => {
        expect(enhancer.success).toBeDefined()
    })

    it('returns obj', () => {
        expect(successOutput).toBeInstanceOf(Object)
    })

    it('returns new obj', () => {
        expect(successOutput).not.toBe(testItem)
    })
    
    it('returns obj with correct props', () =>{
        expect(successOutput).toHaveProperty('name')
        expect(successOutput).toHaveProperty('durability')
        expect(successOutput).toHaveProperty('enhancement')
    })

    it('name is of type string', () => {
        expect(typeof successOutput.name).toBe('string')
    })

    it('durability and enhancement are of type number', () => {
        expect(typeof successOutput.durability).toBe('number')
        expect(typeof successOutput.enhancement).toBe('number')
    })

    it('can increase enhancement by 1', () => {
        expect(successOutput.enhancement).toEqual(testItem.enhancement + 1)
        expect(successOutput.name).toEqual(testItem.name)
        expect(successOutput.durability).toEqual(testItem.durability)
    })

    it('does not increase if enhancement at 20', () => {
        const testItem = { name: 'hammer', durability: 5, enhancement: 20 }
        expect(enhancer.success(testItem).enhancement).toBe(20)
        expect(enhancer.success(testItem).name).toEqual(testItem.name)
        expect(enhancer.success(testItem).durability).toEqual(testItem.durability)
    })
})

describe('failure method', () => {
    const testItem1 = { name: 'hammer', durability: 5, enhancement: 14 } 
    const testItem2 = { name: 'hammer', durability: 5, enhancement: 15 } 
    const testItem3 = { name: 'hammer', durability: 5, enhancement: 17 } 

    it('method is defined', () => {
        expect(enhancer.fail).toBeDefined()
    })

    it('returns obj', () => {
        expect(enhancer.fail(testItem1)).toBeInstanceOf(Object)
    })

    it('returns new obj', () => {
        expect(enhancer.fail(testItem1)).not.toBe(testItem1)
    })
    
    it('returns obj with correct props', () =>{
        expect(enhancer.fail(testItem1)).toHaveProperty('name')
        expect(enhancer.fail(testItem1)).toHaveProperty('durability')
        expect(enhancer.fail(testItem1)).toHaveProperty('enhancement')
    })

    it('name is of type string', () => {
        expect(typeof enhancer.fail(testItem1).name).toBe('string')
    })

    it('durability and enhancement are of type number', () => {
        expect(typeof enhancer.fail(testItem1).durability).toBe('number')
        expect(typeof enhancer.fail(testItem1).enhancement).toBe('number')
    })

    it('decreases durability by 5 when less than 15', () => {
        expect(enhancer.fail(testItem1).durability).toEqual(testItem1.durability - 5)
    })

    it('decreases durability by 10 when greater than or equal to 15', () => {
        expect(enhancer.fail(testItem2).durability).toEqual(testItem2.durability - 10)
    })

    it('decreases durability by 1 when greater than 16', () => {
        expect(enhancer.fail(testItem3).durability).toEqual(testItem3.durability - 1)
    })
})