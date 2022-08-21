const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
  //HTTP://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://192.168.29.55:8545"
  );
  const wallet = new ethers.Wallet(
    "12ac5d36bbf2fd224f99916df4ca28047c7fe5eac5ec76490cb2089f3ec8c439",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("deploying ,please wait..");
  const contract = await contractFactory.deploy();
  console.log(contract);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
