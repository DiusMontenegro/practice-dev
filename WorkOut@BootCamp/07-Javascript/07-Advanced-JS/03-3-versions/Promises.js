function emitRandomNumber(attempts = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 101);
            console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
            console.log(`2 seconds have lapsed.`);
            console.log(`Random number generated is ${randomNum}.`);
            console.log(`- - - - -`);

            if (randomNum <= 80 && attempts <= 10) {
                emitRandomNumber(attempts + 1).then(resolve).catch(reject);
            } else {
                resolve();
            }
        }, 2000);
    })
}

emitRandomNumber().then(() => {
    console.log(`Limit maximum number has been reached!`);
});
