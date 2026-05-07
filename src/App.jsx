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
          console.log(json);
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
