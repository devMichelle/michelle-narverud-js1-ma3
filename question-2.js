

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=193e54c934ac40428ea736833fc5ed1c";

const resultsContainer = document.querySelector(".results");

async function apiCall() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const gameFacts = data.results;

        //console.log(gameFacts);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < gameFacts.length; i++) {

            if (i === 8) {
                break;
            }

            console.log(gameFacts[i].name + " - Rating: " + gameFacts[i].rating + " - Number of tags: " + gameFacts[i].tags.length);

            resultsContainer.innerHTML += `<div><ul><li class="gamename">${gameFacts[i].name}</li> <li>Rating: ${gameFacts[i].rating}</li> <li>Number of tags: ${gameFacts[i].tags.length}</li></ul></div>`;
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = errorMessage("Oh,no! Something went wrong" + " - " + error);
    }
}

apiCall();