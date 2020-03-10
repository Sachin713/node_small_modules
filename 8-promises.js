const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //  resolve([2, 5, 6, 7])
        reject('Things went wrong')
        resolve([2, 5, 6, 7])
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log('success!', result)
}).catch((error) => {
    console.log('Error!', error)
})