var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('It works!!'); //this is returned when everything works fine
        reject('It failed'); //this is returned on failure
    }, 2500);
});

somePromise.then((message)=>{
    console.log('Success: ' + message);
}, (errorMsg)=>{
    console.log('Error: ' + errorMsg);
});