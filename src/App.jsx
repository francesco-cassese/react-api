import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

const urlActresses = 'https://lanciweb.github.io/demo/api/actresses/';
const urlActors = ' https://lanciweb.github.io/demo/api/actors/';

function App() {

  const [cast, setCast] = useState([]);

  const chiamataApi = (url, prefisso) => {
    return (
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json);
          return json.map(({ id, name, birth_year, nationality, biography, image, awards, known_for }) => {
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
        })
    )
  };

  useEffect(() => {
    console.log('Eseguito');

    Promise.all([
      chiamataApi(urlActors, "Male"),
      chiamataApi(urlActresses, "Female")
    ])
      .then(([actors, actresses]) => {
        setCast([...actors, ...actresses]);
      })
      .catch(error => {
        console.error(error);
      });
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
            data={cast}
          />
        </section>
      </main>
    </>
  );
}
export default App;
