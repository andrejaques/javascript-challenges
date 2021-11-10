// how many numbers between 1 and 1000 have the sum of their digits equal to N?
// N = 26; 899, 989 and 998 have the sum of their digits equal to 26.

function howMany(N) {
    let count = 0;
    for (let i = 1; i <= 1000; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum === N) {
            count++;
        }
    }
    return count;
};

console.log(howMany(26));