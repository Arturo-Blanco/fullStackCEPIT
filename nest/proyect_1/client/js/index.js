let englishBtn = document.getElementById('englishBtn');
englishBtn.addEventListener('click', englishGreeting);

let spanishBtn = document.getElementById('spanishBtn');
spanishBtn.addEventListener('click', spanishGreeting);

async function englishGreeting() {
  let promise = await fetch('api/english');
  let answer = promise;
  let message = '';
  message = await answer.json();
  document.querySelector('.greetingsText').innerHTML = message.greeting;
}
async function spanishGreeting() {
  let promise = await fetch('api/spanish');
  let answer = promise;
  let message = '';
  message = await answer.json();
  document.querySelector('.greetingsText').innerHTML = message.greeting;
}