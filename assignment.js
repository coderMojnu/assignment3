//1. kilometerToMeter

function kilometerToMeter(km) {
    const meter = km * 1000; //(1 km = 1000 m)
    return meter;
}



//2. budgetCalculator

function budgetCalculator(clock, phone, laptop) { //please input how many clock, phone and laptop you need to buy
    const clockPrize = clock * 50;
    const phonePrize = phone * 100;
    const laptopPrize = laptop * 500;
    const total = clockPrize + phonePrize + laptopPrize;
    return total;
}



//3. hotelCost

function hotelCost(days) {  //Please input how many days you stay in hotel, Maximum 30 Days.
    if (days <= 10) {
        var cost = days * 100;
    }
    else if (days >= 10 && days <= 20) {
        const discountDays = days - 10;
        cost = 1000 + discountDays * 80;
    }
    else if (days > 20 && days <= 30) {
        const superDiscountDays = days - 20;
        cost = 1800 + superDiscountDays * 50;
    }
    else {
        return "You type wrong charecter or you stay there more than 30 Days";
    }
    return cost;
}



//4. megaFriend

function megaFriend(friendsName) { //input an arry which includes all of your friends name
    var largeName = friendsName[0].length;
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > largeName) {
            var longName = friendsName[i];
            largeName = friendsName[i].length;
        }
    }
    return longName;
}
