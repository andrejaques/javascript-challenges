// how many Lychrel numbers are there below N < 10,000?

function isPalindrome(num) {
    let str = num.toString();
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) return false;
    }
    return true;
}

function reverse(num) {
    let str = num.toString();
    let len = str.length;
    let rev = '';
    for (let i = len - 1; i >= 0; i--) {
        rev += str[i];
    }
    return parseInt(rev);
}

function lychrel_numbers(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        let num = i;
        let is_lychrel = true;
        for (let j = 1; j < 50; j++) {
            num = num + reverse(num);
            if (isPalindrome(num)) {
                is_lychrel = false;
                break;
            }
        }
        if (is_lychrel) count++;
    }
    return count;
};

console.log(lychrel_numbers(10000));