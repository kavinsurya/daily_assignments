let result = ((str) => {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
});

console.log(result('kavin surya'));