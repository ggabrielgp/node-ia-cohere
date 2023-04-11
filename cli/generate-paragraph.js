import cohere from 'cohere-ai'
cohere.init('bHMHWfrPyUN72ZoBkGQtiRv3PJiYkxAeRE7vm5Sq'); // This is your trial API key


const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: 'Genera un parrafo en español sobre que trata la pelicula de Terminator',
    max_tokens: 300,
    temperature: 0.9,
    k: 53,
    stop_sequences: [],
    return_likelihoods: 'NONE'
});

console.log(`Prediction: ${response.body.generations[0].text}`);
