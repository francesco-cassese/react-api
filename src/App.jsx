import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

const urlAttrici = 'https://lanciweb.github.io/demo/api/actresses/';

function App() {

  const [actresses, setActresses] = useState([]);

  const chiamataApi = url => {
    return (
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json);
          const datiEstrapolati = json.map(({ id, name, birth_year, nationality, biography, image, awards, known_for }) => {
            return {
              id,
              name,
              birthYear: birth_year,
              nationality,
              biography,
              image,
              awards,
              knownFor: known_for
            }
          });
          setActresses(datiEstrapolati);
        })
    )
  };

  useEffect(() => {
    console.log('Eseguito');
    chiamataApi(urlAttrici);
  }, []);
  return (
    <>
      <Header />
      <main className="container">
        <div className="text-center mb-2">
          <h1>Actors</h1>
          <span>List of actors fetched from an API</span>
        </div>
        <section>
          <CardList
            data={actresses}
          />
        </section>
      </main>
    </>
  );
}
export default App;
