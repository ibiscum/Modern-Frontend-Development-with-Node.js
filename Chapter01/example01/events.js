console.log('A [start]');
setTimeout(() => console.log('B [timeout]'), 5000);
Promise.resolve().then(() => console.log('C [promise]'));
console.log('D [end]');
