// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('ERROR: Number best be provided')
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('ERROR: Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Correct and uncomplex way to chain promise data

// data here is 10*2 = 20
getDataPromise(10).then((data) => {
    return getDataPromise(data)
    // data here is 20*2 = 40
}).then((data) => {
    return 'this is some test data'
        // data here is 40*2 = 80
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})