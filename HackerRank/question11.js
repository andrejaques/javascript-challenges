// return the number of square digit chains that in some part is equal 89 and the square digit chains starts with all numbers less than n

function square_digit_sum(num) {
    let sum = 0;
    while (num > 0) {
        sum += (num % 10) * (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
};

function square_digit_chains(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        let num = i;
        let chain = [];
        while (num != 89 && num != 1) {
            chain.push(num);
            num = square_digit_sum(num);
        }
        if (num == 89) {
            count++;
        }
    }
    return count;
};

console.log(square_digit_chains(89));