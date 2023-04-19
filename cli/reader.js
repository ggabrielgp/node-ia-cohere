import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const PATH_FILE = path.join(__dirname, '../data', 'data.txt')

const mainFunction = () => {
    fs.readFile(PATH_FILE, "utf-8", (err, data) => {
        if (!err) {
            data.split('\n').map((text) => {
                console.log("texto: ", text)
            })
        }
    })
}

mainFunction()