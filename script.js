console.log('Hello!');

const introPhrases = ['Congratulations', 'My condolences', 'Success', 'Uh-oh', 'Time to worry', 'Countdown has begun'];

const nounPhrases = ['Thrusters', 'Oxygen supply', 'Life support', 'Airlock', 'Navigation system', 'Communication system'];

const verbPhrases = ['terminated', 'shut down', 'restarted', 'never an issue', 'fixed', 'destroyed'];

const selectPhrases = (introPhrases, nounPhrases, verbPhrases) => {
    //Randomly choose one element from each input array
    const rng1 = Math.floor(Math.random() * introPhrases.length);
    const rng2 = Math.floor(Math.random() * nounPhrases.length);
    const rng3 = Math.floor(Math.random() * verbPhrases.length);
    return [introPhrases[rng1], nounPhrases[rng2], verbPhrases[rng3]];
};

const printMessage = (introPhrases, nounPhrases, verbPhrases) => {
    //Call selectPhrases(), turn the phrases into a message, then log result to the console
    const phrases = selectPhrases(introPhrases, nounPhrases, verbPhrases);
    console.log(`${phrases[0]}! ${phrases[1]} was ${phrases[2]}.`);
};