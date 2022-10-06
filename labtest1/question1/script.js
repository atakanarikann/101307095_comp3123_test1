let p = new Promise((resolve, reject) => {
    let mixedArray = ['PIZZA', 10, true, 25 , false, 'Wings']

    if (mixedArray) {
        resolve('Successful')
    }
    else {
        reject('Failure')
    }
    mixedArray = mixedArray.filter((name => typeof name == 'string')
    
    )
    const lc = mixedArray.map(f => { return f.toLowerCase();})
    console.log(lc)
})

p.then((message) =>{
    console.log('The output is: ' + message)

}).catch((message) => {
    console.log('The output is: ' + message)
})
