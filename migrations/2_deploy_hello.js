const hello = artifacts.require('./HelloWorld')
const helloSetting = {
  name: 'Peter'
}
module.exports = function(deployer){
  deployer.deploy(hello, helloSetting.name)
}