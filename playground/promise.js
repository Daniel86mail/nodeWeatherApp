var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number')
                resolve(a+b);
            else
                reject('Arguments must be numbers');
        }, 1500);
    });
};

asyncAdd(1,'2').then((result)=>{
    console.log('The result is : ' + result);
    return asyncAdd(result, 33);
}).then((result) => {
    console.log('Should be 36: ' + result);
}).catch((errorMsg)=>{
    console.log('Error: ' + errorMsg);
});

// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve('It works!!'); //this is returned when everything works fine
//         reject('It failed'); //this is returned on failure
//     }, 2500);
// });

// somePromise.then((message)=>{
//     console.log('Success: ' + message);
// }, (errorMsg)=>{
//     console.log('Error: ' + errorMsg);
// });