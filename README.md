# Netflix clone with ReactJS

* Browse collections with sidewise scroll 
* Play movie trailer in banner and in collection
* Detailed movie information page 
* Degrade gracefully on mobile 

#### Working Features:
1. Hero Banner - Load random movie from a genre or network id
2. Play movie trailer in the Hero Banner area
3. Movie Collections - Displays rows of collectoins from differnt genres
    1. Posters for Netflix Originals
    2. Thumbnails for Geners 
    3. Play movie trailer by clicking on a poster, a click again will stop the trailer

#### Planned Features:
1. Authentication 
2. Play and Info button on each poster/thumbnail in collections
3. Update Movie Information page
    1. Stats, Genres, Cast etc informations
    2. Similar Movies
    3. Comments
    4. Random Movie suggestions
    5. Add to watchlist
    
Known Issues:
1. click on two or more poster in different genres/collection row loads same number of YouTube

#### Demo



#### Installation
1. Clone the repo
2. Install dependencies `npm install` 
3. Start the local server `npm start`
4. Load http://localhost:3000/

#### Built With
* React, Redux 
* Movie Trailer https://www.npmjs.com/package/movie-trailer
* React YouTube https://www.npmjs.com/package/react-youtube
