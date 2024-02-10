const generatorBtn = document.getElementById('generator_btn')
const jokeContent = document.getElementById('joke_content')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"

const generator = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => jokeContent.innerHTML = `QUESTION : "${item.setup}" <br> ANSWER : "${item.delivery}"`)
}

generator()

generatorBtn.addEventListener('click', () => { generator() })