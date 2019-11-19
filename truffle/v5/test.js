'use strict'

const Web3 = require('web3');
// npm install web3 --save
var contract = require("truffle-contract");
//npm install truffle-contract@3 --save
const fs = require('fs');

var web3Provider = new Web3.providers.HttpProvider('http://114.108.177.193:25000');
var web3 = new Web3(web3Provider);

const crowdfund_json = fs.readFileSync('./build/contracts/Crowdfunding.json', 'utf-8');
const crowdfund_abi = JSON.parse(crowdfund_json);

const project_json = fs.readFileSync('./build/contracts/Project.json', 'utf-8');
const project_abi = JSON.parse(project_json);

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;

const basecoin = '0xed9d02e382b34818e88b88a309c7fe71e65f419d'

//console.log('abi', abi)
var crowdfund_contract = contract(crowdfund_abi, basecoin);
crowdfund_contract.setProvider(web3Provider);


async function test() {
	const crowdfundInstance = await crowdfund_contract.deployed();
	
	const addr1 = await web3.eth.personal.newAccount('!@superpassword')
	const addr2 = await web3.eth.personal.newAccount('!@superpassword')

	await crowdfundInstance.startProject('캠페인1', '캠페인1', 1, 10, addr1, { from: basecoin, gas: 4500000 })

	await crowdfundInstance.returnAllProjects().then( async (projects) => {
		console.log(projects);
        projects.forEach(async (projectAddress) => {
			console.log(projectAddress);
			const instance = new web3.eth.Contract(project_abi['abi'], projectAddress);
			console.log(instance);
			
			await instance.methods.getDetails().call().then((projectData) => {
				console.log(projectData);
				
          	});
        });
    });
}
test()