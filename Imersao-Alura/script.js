const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


function requestApi(searchTerm) {
    if (!searchTerm) return displayResults([]);
    fetch(`http://localhost:3000/artists?name_like${searchTerm}`)
        .then((response) => response.json())
        .then((result) => {
            const data = result.filter(artist => {
                return artist.name.toLowerCase().includes(searchTerm)
            })
            
            return displayResults(data)
        });
}

function displayResults(result) {
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    if (!result.length) {
        artistName.innerText = '';
        artistImage.src = '';

        resultArtists.classList.add('hidden');
        resultPlaylist.classList.remove('hidden')
    }
    else {
        result.forEach((element) => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg;
        });
        resultArtists.classList.remove('hidden');
        resultPlaylist.classList.add('hidden');
        // resultArtists.classList.remove('hidden');
    }

}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    if (!searchTerm) {
        // resultPlaylist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
    }

    requestApi(searchTerm);

});