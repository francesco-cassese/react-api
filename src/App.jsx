import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

const urlAttrici = 'https://lanciweb.github.io/demo/api/actresses/';
const urlAttori = ' https://lanciweb.github.io/demo/api/actors/';

function App() {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const chiamataApi = (url, setData, prefisso) => {
    return (
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json);
          const datiEstrapolati = json.map(({ id, name, birth_year, nationality, biography, image, awards, known_for }) => {
            return {
              id: `${prefisso} ${id}`,
              name,
              birthYear: birth_year,
              nationality,
              biography,
              image,
              awards,
              knownFor: known_for
            }
          });
          setData(datiEstrapolati);
        })
        .catch(error => {
          console.error(error);

        })
    )
  };

  useEffect(() => {
    console.log('Eseguito');
    chiamataApi(urlAttrici, setActresses, "Female");
    chiamataApi(urlAttori, setActors, "Male");
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section>
          <div className="text-center mb-2">
            <h1>Actors</h1>
            <span>List of actors fetched from an API</span>
          </div>
          <CardList
            data={[...actors, ...actresses]}
          />
        </section>
      </main>
    </>
  );
}
export default App;
