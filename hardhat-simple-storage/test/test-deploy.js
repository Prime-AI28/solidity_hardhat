const {
    isCallTrace,
} = require('hardhat/internal/hardhat-network/stack-traces/message-trace')
const { ethers } = require('hardhat')
const { expect, assert } = require('chai')

// describe("SimpleStorage", () => {})
describe('SimpleStorage', function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it('Should start with a favorite number of 0', async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = '0'
        //expect

        assert.equal(currentValue.toString(), expectedValue)
    })

    //it.only() - run only this test

    it('Should update the favorite number', async function () {
        const transactionResponse = await simpleStorage.store(7)
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        const expectedValue = '7'
        assert.equal(updatedValue.toString(), expectedValue)
    })
})
