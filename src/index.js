module.exports = function toReadable (num) {
	let firstNum
  let secondNum
  let thirdNum
  
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  if (num < 10) return nums[num]

  const numsAgain = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  if (num < 20) return numsAgain[num - 10]

  const numsAgainAgain = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  const strValue = String(num)
  const arrValue = strValue.split('')  

  if (arrValue.length === 2) {
    if (arrValue[1] === '0') return numsAgainAgain[num / 10]
    
    return `${numsAgainAgain[arrValue[0]]} ${nums[arrValue[1]]}`
  }
  
  if (arrValue[1] === '0' && arrValue[2] === '0') return `${nums[arrValue[0]]} hundred`
  if (arrValue[1] === '0') return `${nums[arrValue[0]]} hundred ${nums[arrValue[2]]}`
  if (arrValue[1] === '1') return `${nums[arrValue[0]]} hundred ${numsAgain[arrValue[2]]}`
  if (arrValue[2] === '0') return `${nums[arrValue[0]]} hundred ${numsAgainAgain[arrValue[1]]}`
  
  return `${nums[arrValue[0]]} hundred ${numsAgainAgain[arrValue[1]]} ${nums[arrValue[2]]}`
}
