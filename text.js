const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

const filters = {
  sarcastic(letter, index) {
    // if it is odd, it will return 1, and that is truthy, so this if statement will trip
    if (index % 2) {
      return letter.toUpperCase();
    }
    // if it is even, it will return zero and we will lower case it
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};

function transformText(text) {
  // take the text, and loop over each letter
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = text;
}

textarea.addEventListener('input', e => transformText(e.target.value));
