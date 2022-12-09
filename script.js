console.log('Hello!');

const introPhrases = ['Congratulations', ''];

const nounPhrases = [];

const verbPhrases = [];

const selectPhrases = (introPhrases, nounPhrases, verbPhrases) => {
    //Randomly choose one element from each input array
    const rng1 = Math.floor(Math.random() * introPhrases.length);
    const rng2 = Math.floor(Math.random() * nounPhrases.length);
    const rng3 = Math.floor(Math.random() * verbPhrases.length);
};

const printMessage = () => {
    //Call selectPhrases(), turn the phrases into a message, then log result to the console
};