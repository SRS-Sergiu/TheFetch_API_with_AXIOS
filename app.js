
const newJoke = async () => {
  const getNewJoke =  await getJoke();
  const newLi = document.createElement('li')
  newLi.append(getNewJoke);
  jokes.append(newLi);
}

const getJoke = async() => {
  try{
    const config = { headers: { Accept: 'application/json'}}
  const res = await axios.get('https://icanhazdadjoke.com/', config);
 return res.data.joke;
  }catch(e){
    return "No Jokes available!"
  }
}

const btn  = document.querySelector("button");
btn.addEventListener('click', newJoke)
const jokes  = document.querySelector("#jokes");