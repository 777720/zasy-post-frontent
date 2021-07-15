const randomNum = (minNum,maxNum) => {
    return parseInt(Math.random() * (maxNum-minNum + 1) + minNum, 10)
}

export {
    randomNum
}
