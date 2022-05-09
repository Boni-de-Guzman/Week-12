const {shuffleArray} = require('./utils')

const bots = 
    {
        id: 0,
        name: 'The Hammer', 
        imgAddress: 'https://robohash.org/hammer',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }


describe('shuffleArray should', () => {
    test('return object', () => {
        const formattedTitle = shuffleArray(bots.name)
        expect(typeof formattedTitle).toBe('object')
    });
});

test('name should contain letter "h"', () => {
    const healthNum = shuffleArray(bots.name)
    expect(healthNum).toContain('H');
})