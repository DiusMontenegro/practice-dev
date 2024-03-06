function emitRandomNumber(callback, attempts = 1) {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempts}. EmitRandomNumber is called.`);
        console.log(`2 seconds have lapsed.`);
        console.log(`Random number generated is ${randomNum}.`);
        console.log(`- - - - -`);

        if (randomNum <= 80 && attempts <= 10) {
            emitRandomNumber(callback, attempts + 1);
        } else {
            callback();
        }
    }, 2000);
}

emitRandomNumber(() => {
    console.log(`Limit maximum number has been reached!`);
});
