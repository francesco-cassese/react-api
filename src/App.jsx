import { useEffect } from "react";
const urlAttrici = 'https://lanciweb.github.io/demo/api/actresses/';

function App() {

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
          console.log(datiEstrapolati);
        })
    )
  }

  useEffect(() => {
    console.log('Eseguito');
    chiamataApi(urlAttrici);
  }, []);

  return (
    <h1>Hello</h1>
  );
}
export default App;
