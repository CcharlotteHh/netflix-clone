import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Row title="NETFLIX ORGIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentairies" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
