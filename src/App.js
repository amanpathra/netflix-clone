import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchURL={request.fetchTrending} />
      <Row title='Top Rated' fetchURL={request.fetchTopRated} />
      <Row title='Action Movies' fetchURL={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchURL={request.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={request.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchURL={request.fetchRomanceMovies} />
      <Row title='Documentaries' fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;