import cohere from "cohere-ai";
import ora from "ora";

const spinner = ora("Generando preguntas de entrevista").start();

cohere.init('bHMHWfrPyUN72ZoBkGQtiRv3PJiYkxAeRE7vm5Sq');

const start = performance.now()

const intervalId = setInterval(() => {
    const time = Math.floor((performance.now() - start) / 1000)
    spinner.text = `Generando preguntas (${time}s)`
})

const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: 'Generate a list of 5 interview questions for a senior frontend engineer.',//'Genera una lista de 5 preguntas de entrevista para un Ingeniero Frontend Senior',
    max_tokens: 100,
    temperature: 1.2, //grado de aleatoriedad de las resp
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: "NONE"
})

spinner.succeed('Listo!')
clearInterval(intervalId)

const { generations } = response.body;

console.log(generations[0].text)