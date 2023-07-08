// code your solution here
function saturdayFun(val = 'roller-skate'){
    return`This Saturday, I want to ${val}!`
}

const mondayWork = function(val ='go to the office'){
    return `This Monday, I will ${val}.`
}
const wrapAdjective = function(string="*"){
    const inner = function (val ="special"){
        return `You are ${string}${val}${string}!`;
    }
    return inner;
}