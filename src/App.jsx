import { useEffect, useState } from "react";
import CardList from "./components/CardList";
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
          const datiEstrapolati = json.map(({ id, name, birth_year, nationality, biography, image, awards }) => {
            return {
              id,
              name,
              birthYear: birth_year,
              nationality,
              biography,
              image,
              awards
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
    <section>
      <div>
        <CardList
          data={actresses}
        />
      </div>
    </section>
  );
}
export default App;
