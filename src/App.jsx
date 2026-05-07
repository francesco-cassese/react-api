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
      <section className="container">
        <CardList
          data={actresses}
        />
      </section>
    </>
  );
}
export default App;
