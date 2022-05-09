
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});


test('Removod from Dou  go back to choices', async () => {
    const removedBot = await driver.findElement(By.id('player-duo'))
    const displayed = await removedBot.isDisplayed()
    expect(displayed).toBe(false)
});

test('See all bot should display all the bots', async () => {
    const seeAllBot = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllBot.isDisplayed()
    expect(displayed).toBe(true)
});