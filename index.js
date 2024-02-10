const generatorBtn = document.getElementById('generator_btn')
const jokeContent = document.getElementById('joke_content')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const generator = () => {
    fetch(url)
        .then(data => data.json())
        .then(item =>
            jokeContent.textContent = item.joke)
}

generator()

generatorBtn.addEventListener('click', () => { generator() })