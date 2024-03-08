// 获取指定智能合约的方法参数类型
function getContractMethodParamTypes(abi, methodName) {
  const method = abi.find(item => item.name === methodName && item.type === 'function');
  return method.inputs.map(param => param.type);
}

// 获取指定智能合约的方法返回值类型
function getContractMethodReturnTypes(abi, methodName) {
  const method = abi.find(item => item.name === methodName && item.type === 'function');
  return method.outputs.map(output => output.type);
}