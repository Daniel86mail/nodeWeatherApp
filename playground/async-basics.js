console.log('Starting app');

setTimeout(() => {
    console.log('Inside the timeout callback');
}, 2000);

setTimeout(() => {
    console.log('second setTimout');
}, 0);

console.log('Finished');