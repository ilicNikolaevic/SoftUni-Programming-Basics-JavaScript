function pipesInPool(input) {
    let volumePool = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let hoursWorkerMissing = Number(input[3]);

    let volumeFromPipes = (debitFirstPipe + debitSecondPipe) * hoursWorkerMissing;
    let percentFromFirst = ((debitFirstPipe * hoursWorkerMissing) * 100) / volumeFromPipes;
    let percentFromSecond = ((debitSecondPipe * hoursWorkerMissing) * 100) / volumeFromPipes;

    if (volumeFromPipes <= volumePool) {
        console.log(`The pool is ${((volumeFromPipes * 100) / volumePool).toFixed(2)}% full. Pipe 1: ${percentFromFirst.toFixed(2)}%. Pipe 2: ${percentFromSecond.toFixed(2)}%.`)
    } else {
        console.log(`For ${hoursWorkerMissing} hours the pool overflows with ${(volumeFromPipes - volumePool).toFixed(2)} liters.`)
    }
}

pipesInPool(["100", "100", "100", "2.5"])