async function emitRandomNumber(attempts = 1) {
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

        await emitRandomNumber(attempts + 1);
    } else {
        console.log(`Limit maximum number has been reached!`);
    }
}

emitRandomNumber();
