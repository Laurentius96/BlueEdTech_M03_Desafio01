import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
    const tarefa = props.tarefa;
    return (
        <Link to={`/view/${tarefa._id}`} className="col">
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Título: {tarefa.titulo}
                        </h5>
                        <br />
                        <p className="card-text text-center ">
                            Prioridade: {tarefa.prioridade}
                        </p>
                        <p className="card-text text-center ">
                            Status: {tarefa.status}
                        </p>
                        <p className="card-text text-center">
                            Criação: {tarefa.dataCriacao}
                        </p>
                        <p className="card-text text-center">
                            Prazo: {tarefa.prazo}
                        </p>
                        <p className="card-text text-center">
                            Descrição: {tarefa.descricao}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
