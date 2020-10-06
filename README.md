# Netflix clone with ReactJS

[Live Demo :rocket: ](https://netflix-clone-45239.web.app/)


* Browse movie collections with sidewise scroll 
* Play movie trailer in banner and in collection
* Detailed movie information page 
* Graceful adaptation on mobile

#### Working Features:
1. Hero Banner - Load random movie from a genre or network id
2. Play movie trailer in the Hero Banner area
3. Navigate to detailed movie information page by clicking _More Info_
4. Movie Collections - Displays rows of collectoins from particular genres
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
1. click on two or more poster in different genres/collection row loads multiple YouTube players
2. YouTube height for mobile on Hero Banner
3. Add test cases, collection/genre configuarability, refactor 


#### Screenshots
##### Landing page > Hero Banner
![Screenshot 2020-10-06 at 6 12 37 PM (2)](https://user-images.githubusercontent.com/71149670/95203178-00b7cd80-0800-11eb-9a1a-1235cdc6f66f.png)

##### Landing page > Collections Slider
![Screenshot 2020-10-06 at 6 12 56 PM (2)](https://user-images.githubusercontent.com/71149670/95203198-07464500-0800-11eb-98b3-18137dcc86ee.png)

##### Movie Information Page
![Screenshot 2020-10-06 at 6 13 11 PM (2)](https://user-images.githubusercontent.com/71149670/95203200-07dedb80-0800-11eb-905f-a3146d1456cd.png)



#### Installation
1. Clone the repo
2. Install dependencies `npm install` 
3. Start the local server `npm start`
4. Load http://localhost:3000/

#### Built With
* React, Redux 
* TMDB API https://developers.themoviedb.org/3
* Movie Trailer https://www.npmjs.com/package/movie-trailer
* React YouTube https://www.npmjs.com/package/react-youtube
