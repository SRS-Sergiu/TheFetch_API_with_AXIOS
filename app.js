
const jokes  = document.querySelector("#jokes");
const getJoke = async() => {
  const config = { headers: { Accept: 'application/json'}}
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  const newLi = document.createElement('li')
  newLi.append(res.data.joke);
  jokes.append(newLi);
}
const btn  = document.querySelector("button");
btn.addEventListener('click', getJoke)