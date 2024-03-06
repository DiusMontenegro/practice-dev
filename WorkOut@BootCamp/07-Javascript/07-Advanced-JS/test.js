function emitRandomNumber1(callback, attempts = 1) {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
        console.log(`2 seconds have lapsed.`);
        console.log(`Random number generated is ${randomNum}.`);
        console.log(`- - - - -`);

        if (randomNum <= 80 && attempts <= 10) {
            emitRandomNumber1(callback, attempts + 1);
        } else {
            callback();
        }
    }, 2000);
}

emitRandomNumber1(() => {
    console.log(`Limit maximum number has been reached!`);
});


function emitRandomNumber2(attempts = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 101);
            console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
            console.log(`2 seconds have lapsed.`);
            console.log(`Random number generated is ${randomNum}.`);
            console.log(`- - - - -`);

            if (randomNum <= 80 && attempts <= 10) {
                emitRandomNumber2(attempts + 1).then(resolve).catch(reject);
            } else {
                resolve();
            }
        }, 2000);
    })
}

emitRandomNumber2().then(() => {
    console.log(`Limit maximum number has been reached!`);
});


async function emitRandomNumber3(attempts = 1) {
    if (attempts <= 10) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const randomNum = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
        console.log(`2 seconds have lapsed.`);
        console.log(`Random number generated is ${randomNum}.`);
        console.log(`- - - - -`);

        if (randomNum > 80) {
            console.log(`Limit maximum number has been reached!`);
            return;
        }

        await emitRandomNumber3(attempts + 1);
    } else {
        console.log(`Limit maximum number has been reached!`);
    }
}

emitRandomNumber3();
