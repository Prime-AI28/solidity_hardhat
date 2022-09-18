//imports
const { exec, ethers } = require('hardhat')
const { run, network } = require('hardhat')

//async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        'SimpleStorage'
    )
    console.log('Depoying contract .......')
    const simplestorage = await SimpleStorageFactory.deploy()
    await simplestorage.deployed()

    console.log(`Deployed contract address: ${simplestorage.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log('Waiting for verification..')
        await simplestorage.deployTransaction.wait(3)
        await verify(simplestorage.address, [])
    }
    const currentValue = await simplestorage.retrieve()
    console.log(`Current value: ${currentValue}`)

    //update current value
    const transactionResponse = await simplestorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simplestorage.retrieve()
    console.log(`Updated value: ${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log('Verifying contract on Etherscan...')
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes('already verified')) {
            console.log('Contract already verified')
        } else {
            //console.log(error)
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
