module.exports = function reverse(n) {
    const newN = String(n).split(/\D/).join("");
    const number = newN.split("").reverse().join("");

    return +number;
};
