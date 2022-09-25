import React, { useState, useEffect } from "react";
import Card from "../Card";
import Api from "../../../api/api";

const ListToDo = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {
    const response = await Api.fetchGetAll();

    const tarefasApi = await response.json();
    console.log("Resposta da API", tarefasApi);

    setTarefas(tarefasApi);
  };

  // return (
  //   <di>
  //     <br></br>
  //     <div class="row row-cols-1 row-cols-md-3 g-4">
  //       {tarefas.map((tarefa) => (
  //         <Card key={tarefa._id} tarefa={tarefa} />
  //       ))}
  //     </div>
  //   </di>
  // );

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {tarefas.map((tarefa) => (
          <Card key={tarefa._id} tarefa={tarefa} />
        ))}
      </div>
    </div>
  );
};

export default ListToDo;
