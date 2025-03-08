const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc')); // Prints: '123'
myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href); // Prints: 'https://example.org/?abc=123&abc=xyz'

