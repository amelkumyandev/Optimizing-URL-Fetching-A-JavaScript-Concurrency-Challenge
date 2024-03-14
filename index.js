const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6',
    'https://jsonplaceholder.typicode.com/posts/7',
    'https://jsonplaceholder.typicode.com/posts/8',
    'https://jsonplaceholder.typicode.com/posts/9',
    'https://jsonplaceholder.typicode.com/posts/10',
    'https://cat-fact.herokuapp.com/facts/random',
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    'https://api.kanye.rest',
    'https://api.adviceslip.com/advice',
    'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
    'https://pokeapi.co/api/v2/pokemon/1',
    'https://pokeapi.co/api/v2/pokemon/2',
    'https://pokeapi.co/api/v2/pokemon/3',
    'https://pokeapi.co/api/v2/pokemon/4',
    'https://pokeapi.co/api/v2/pokemon/5',
    'https://pokeapi.co/api/v2/pokemon/6',
    'https://pokeapi.co/api/v2/pokemon/7',
    'https://pokeapi.co/api/v2/pokemon/8',
    'https://pokeapi.co/api/v2/pokemon/9',
    'https://pokeapi.co/api/v2/pokemon/10',
    'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    'https://dog.ceo/api/breeds/image/random',
    'https://api.thecatapi.com/v1/images/search',
    'https://api.noopschallenge.com/hexbot',
    'https://www.boredapi.com/api/activity',
    'https://api.agify.io?name=michael',
    'https://api.genderize.io?name=luc',
    'https://api.nationalize.io?name=nathaniel',
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    'https://www.themealdb.com/api/json/v1/1/random.php',
    'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
    'https://breaking-bad-quotes.herokuapp.com/v1/quotes',
    'https://icanhazdadjoke.com/',
    'https://api.funtranslations.com/translate/yoda.json?text=I+am+a+developer',
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/',
    'https://swapi.dev/api/people/5/',
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/4',
    'https://rickandmortyapi.com/api/character/5',
    'https://rickandmortyapi.com/api/character/6',
    'https://rickandmortyapi.com/api/character/7',
    'https://rickandmortyapi.com/api/character/8',
    'https://rickandmortyapi.com/api/character/9',
    'https://rickandmortyapi.com/api/character/10',
    'https://api.open-notify.org/astros.json',
    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02',
    'https://api.publicapis.org/random',
    'https://quotes.rest/qod?language=en',
    'https://api.tvmaze.com/search/shows?q=batman',
    'https://api.quotable.io/random',
    'https://api.github.com/users/github',
    'https://api.ipify.org?format=json',
    'https://api.zippopotam.us/us/90210',
    'https://www.metaweather.com/api/location/44418/',
    'https://restcountries.eu/rest/v2/name/united',
    'https://api.exchangeratesapi.io/latest',
    'https://date.nager.at/api/v2/publicholidays/2020/US',
    'https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY',
    'https://fakestoreapi.com/products/1',
    'https://fakestoreapi.com/products/2',
    'https://fakestoreapi.com/products/3',
    'https://fakestoreapi.com/products/4',
    'https://fakestoreapi.com/products/5',
    'https://fakestoreapi.com/products/6',
    'https://fakestoreapi.com/products/7',
    'https://fakestoreapi.com/products/8',
    'https://fakestoreapi.com/products/9',
    'https://fakestoreapi.com/products/10',
    'https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5',
    'https://jsonplaceholder.typicode.com/todos/6',
    'https://jsonplaceholder.typicode.com/todos/7',
    'https://jsonplaceholder.typicode.com/todos/8',
    'https://jsonplaceholder.typicode.com/todos/9',
    'https://jsonplaceholder.typicode.com/todos/10',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/comments/2',
    'https://jsonplaceholder.typicode.com/comments/3',
    'https://jsonplaceholder.typicode.com/comments/4',
    'https://jsonplaceholder.typicode.com/comments/5',
    'https://jsonplaceholder.typicode.com/comments/6',
    'https://jsonplaceholder.typicode.com/comments/7',
    'https://jsonplaceholder.typicode.com/comments/8',
    'https://jsonplaceholder.typicode.com/comments/9',
    'https://jsonplaceholder.typicode.com/comments/10',
  ];

async function fetchUrlsWithLimit(urls, limit) {
    const results = [];
    let currentIndex = 0;
  
    // Function to process a single URL fetch operation.
    async function fetchUrl(url) {
      try {
        const response = await fetch(url);
        const data = await response.text();
        results.push({ url, length: data.length });
      } catch (error) {
        results.push({ url, error: error.message });
      }
    }
  
    // Function to process URLs with concurrency control.
    async function processBatch() {
      // While there are URLs left to process...
      while (currentIndex < urls.length) {
        // Calculate the slice of URLs to process in this batch.
        const batch = urls.slice(currentIndex, currentIndex + limit);
        // Update currentIndex for the next batch.
        currentIndex += limit;
        // Wait for the current batch of fetch operations to complete.
        await Promise.all(batch.map(url => fetchUrl(url)));
      }
    }
  
    await processBatch();
    return results;
  }
  
    
  // Function call with the URLs and a limit of 2 concurrent requests
  fetchUrlsWithLimit(urls, 4).then(results => {
    console.log("results");
    console.log(results);
  }).catch(error => {
    console.error('Error fetching URLs:', error);
  });
  
