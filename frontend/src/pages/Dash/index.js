import React, { useState } from 'react';
import { MdCloud, MdAirplanemodeActive, MdWbSunny } from "react-icons/md";

import api from '../../services/api';

import { Container, FormInput, SendButton } from "./styles.js"

export default function Home() {
  const [clouds, setNuvem] = useState();
  const [airports, setAeroporto] = useState();
  const [columns, setColunas] = useState();
  const [lines, setLinhas] = useState();
  const [dados, setDados] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.get(
      `/?clouds=${clouds}&airports=${airports}&columns=${columns}&lines=${lines}`
    );
    setDados(response.data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="number"
          min="4"
          placeholder="Quantidade de nuvens"
          title="Quantidade de nuvens"
          value={clouds}
          onChange={(e) => setNuvem(e.target.value)}
        />
        <FormInput
          type="number"
          min="3"
          placeholder="Quantidade de aeroportos"
          title="Quantidade de aeroportos"
          value={airports}
          onChange={(e) => setAeroporto(e.target.value)}
        />
        <FormInput
          type="number"
          min="10"
          placeholder="Quantidade de colunas"
          title="Quantidade de colunas"
          value={columns}
          onChange={(e) => setColunas(e.target.value)}
        />

        <FormInput
          type="number"
          min="10"
          placeholder="Quantidade de linhas"
          title="Quantidade de linhas"
          value={lines}
          onChange={(e) => setLinhas(e.target.value)}
        />

        <SendButton type="submit">Enviar</SendButton>
      </form>
      {Object.keys(dados).length > 0 ? (
        <>
          <hr />
          <p>
            <strong>{dados.description}</strong>
          </p>
        </>
      ) : (
        <></>
      )}

      <hr />
      
      <div className="row">
        <table>
          <tbody>
            {
              Object.keys(dados).length > 0 ?  
               (
                 <>
                 {
                   dados.initial_map.map((row, i) => (
                     <tr>
                       {
                        row.map((column, i) => <td>{
                          column === 3 ? 
                          <MdAirplanemodeActive size={20} color="#03071e" /> : column === 2 ? 
                          <MdWbSunny size={20} color="#fca311" /> :
                          <MdCloud size={20} color="#023e8a" />
                        }</td>)
                       }
                     </tr>
                   ))
                 }
                 </>
               )
              : (<h1>O jogo começa hoje, vamos lá!</h1>)
            }
          </tbody>
        </table>
      </div>

    </Container>
  );
}
