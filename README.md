# Hello world Ethereum smart contract
## Prerequisite
```
npm install truffle -g
npm install ganache-cli -g
ganache-cli -p 8545
```
## Deploy smart contract
```
truffle develop
complie
migrate
let name = await instance.getName()
name // 'Peter'
let newName = await instance.setName('Peter Vu')
newName // 'Peter Vu'
```