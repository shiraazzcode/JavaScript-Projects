// Simple Dictionary App
const input_word = document.getElementById("input-word");
const search_btn = document.getElementById("search-btn");
const display_wordinfo = document.querySelector(".display-meaning");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWordMeaning(input_word.value);
});

const getWordMeaning = async (word) => {
  console.log("loading...");
  display_wordinfo.innerHTML = "<h4>loading...</h4>";
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )
    .then((response) => response.json())
    .then((data) => {
      let definitions = data[0].meanings[0].definitions[0];
      let meaning = data[0].meanings[0].definitions[0].definition;

      let example = definitions.example;
      let part_of_speech = data[0].meanings[0].partOfSpeech;
      let synonyms = data[0].meanings[0].synonyms;
      let antonyms = data[0].meanings[0].antonyms;

      display_wordinfo.innerHTML = `
                <h3>Meaning: ${meaning}</h3><br>
                <p><strong>Part of speech:</strong> ${part_of_speech}</p><br>
                <p><strong>Example:</strong> ${example}</p><br>
                <p><strong>Synonyms:</strong> ${synonyms.join(", ")}</p><br>
                <p><strong>Antonyms:</strong> ${antonyms.join(", ")}</p>
                `;
    })
    .catch(() => {
      display_wordinfo.innerHTML = `Not Found!`;
    });
};
