function budgetCalculator(clock, phone, laptop){
    const clockPrize = clock*50;
    const phonePrize = phone*100;
    const laptopPrize = laptop*500;
    const total = clockPrize + phonePrize + laptopPrize;
    return total;
}
const result = budgetCalculator(3,5,7);
console.log(result);