'use strict'
const getContractInstance = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId()
  
  const deployedAddress = '0xE3EF892aaFa16660e919147A336DC8fa75d67667'
  
  // create the instance
  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress
  )
  return instance
}

export default getContractInstance