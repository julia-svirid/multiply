module.exports = function multiply(first, second) {
    first=BigInt(first);
    second=BigInt(second);
    result=first*second;
    result=result+' ';
    result=result.slice(0,-1);
    Number(result);
    return result;
}
