/*To complete the activity, you will need to do the following:

Make a heading in your HTML that says "My Top Three Favorite Movies"
Make an empty <ol> in your HTML.
Make an array of three objects that represent your top 3 favorite movies
Each object will be a movie should have a name key, a year key, a director key, and a picture key that has a URL of a poster (find pics on google)
Map over the array and build an array of <li> elements for each object (take a look at the last module video)
Grab the <ol> on the page with JavaScript and insert your array onto the page to display the information your top 3 favorite movies.
The poster should be displayed! Not the URL.
*/

const favoriteMovies = [
    {name: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    picture: "https://i.ytimg.com/vi/PEaFFkiNzlY/maxresdefault.jpg" 
    },
    {name: "The Gladiator",
    year: 2000,
    director: "Ridley Scott",
    picture: "https://image.tmdb.org/t/p/original/rotQFyaeNQivUJOm3J3M7YqPNMx.jpg"
    },
    {name: "The Ten Commandments",
    year: 1956,
    director: "Cecil B. Demille",
    picture: "https://footeandfriendsonfilm.com/wp-content/uploads/2020/03/The-Ten-Commandments.jpg"
    }
];
function createListItem(movie){
const li = document.createElement("li");
li.innerHTML = `
<h3>${movie.name}</h3>
<p>Year: ${movie.year}</p>
<p>Director: ${movie.director}</p>
<img src = "${movie.picture}" alt = "${movie.name} Poster">
`;
return li;
}
const movieListElement = document.getElementById("movieList");
const movieListItems = favoriteMovies.map(createListItem);
movieListItems.forEach(li => movieListElement.appendChild(li));
