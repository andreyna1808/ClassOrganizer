import React, { useState } from "react";

function Gerador(){
  const dados = [
    {
     "id": 1,
     "name_turma": "Labenu",
     "turno": "Vespertino",
     "materias": [
         {
           "id": 1,
           "name_materia": "Programacao",
             "qtd_aulas": 3,
             "professor": ""
         },
         {
           "id": 2,
           "name_materia": "Fisica",
             "qtd_aulas": 2,
             "professor": ""
         },
         {
           "id": 3,
           "name_materia": "Astronomia",
             "qtd_aulas": 7,
             "professor": ""
         }
     ]
  },
  {
    "id": 2,
    "name_turma": "Teste",
    "turno": "Matutino",
    "materias": [
        {
          "id": 1,
          "name_materia": "Programacao",
            "qtd_aulas": 1,
            "professor": ""
        },
        {
          "id": 2,
          "name_materia": "Fisica",
            "qtd_aulas": 3,
            "professor": ""
        },
        {
          "id": 3,
          "name_materia": "Astronomia",
            "qtd_aulas": 4,
            "professor": ""
        }
    ]
}
]

  const [hab, setHab ] = useState(true)
  const [array, setArray ] = useState(0)

 const  getRandom = (max) => {
  let gerador = Math.floor(Math.random() * max + 1)
  console.log(gerador);
  console.log(max);
  return gerador
  }


  const dadosGerados = () => {
    for(let i = 0; i <= array; i++){
      if( array[i] === dados.materias[i]){

      }
    }
  }

    return <div>
      <h1>OLá mundo</h1>
      {dados.map((info) => {
        return <div>
          <h1>{info.name_turma}</h1>
          <button onClick={() => getRandom(info.materias.length)}>Gerar</button>
          <div>{info.materias.map((dados) => {
            return <div key={dados.id}>
              <h1>{dados.qtd_aulas}</h1>
              </div>

          })}</div>
          </div>
      })}
    </div>
}

export default Gerador;
