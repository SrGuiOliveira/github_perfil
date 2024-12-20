import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil  nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
       {/* {formIsVisible && (
        <Formulario />
      )}
      <button onClick={() => setFormIsVisible(!formIsVisible)} type="button">toggle form</button> */}
    </>
  )
}

export default App
