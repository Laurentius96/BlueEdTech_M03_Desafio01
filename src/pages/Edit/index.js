import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Api from '../../api/api';

const Edit = () => {
    const navigate = useNavigate();

    const [tarefa, setTarefa] = useState({
        titulo: '',
        prioridade: '',
        status: '',
        prazo: '',
        descricao: '',
    });

    useEffect(() => {
        getTarefaById();
    }, []);

    const { id } = useParams();

    const getTarefaById = async () => {
        const response = await Api.fetchGetById(id);
        const tarefa = await response.json();
        console.log(tarefa);
        setTarefa(tarefa);
    };

    const handleFieldsChange = evento => {
        console.log(evento.target.name);

        const tarefaEdit = {
            ...tarefa,
        };

        tarefaEdit[evento.target.name] = evento.target.value;

        setTarefa(tarefaEdit);
    };

    const handleSubmit = async evento => {
        evento.preventDefault();

        const response = await Api.fetchPut(tarefa, id);
        const data = await response.json();
        alert(data.message);

        navigate(`/view/${id}`);
    };

    return (
        <div className="container">
            <div className="card mt-4 m-2">
                <div className="card-title text-center">
                    <h3 className="m-3">Edição da Tarefa</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="nome">Título:</label>
                                <input
                                    id="titulo"
                                    className="form-control"
                                    type="text"
                                    placeholder="Digite o título da tarefa"
                                    name="titulo"
                                    value={tarefa.titulo}
                                    onChange={handleFieldsChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label htmlFor="plataforma">Prioridade::</label>
                                <input
                                    id="prioridade"
                                    className="form-control"
                                    type="text"
                                    placeholder="Digite a prioridade da tarefa"
                                    name="prioridade"
                                    value={tarefa.prioridade}
                                    onChange={handleFieldsChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label htmlFor="status">Status:</label>
                                <input
                                    id="status"
                                    className="form-control"
                                    type="text"
                                    placeholder="Digite o status da tarefa"
                                    name="status"
                                    value={tarefa.status}
                                    onChange={handleFieldsChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label htmlFor="prazo">Prazo:</label>
                                <input
                                    id="prazo"
                                    className="form-control"
                                    type="text"
                                    placeholder="Digite o prazo da tarefa - ex: (02/03/2022)"
                                    name="prazo"
                                    value={tarefa.prazo}
                                    onChange={handleFieldsChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição:</label>
                                <input
                                    id="descricao"
                                    className="form-control"
                                    type="text"
                                    placeholder="Digite a descrição da tarefa"
                                    name="descricao"
                                    value={tarefa.descricao}
                                    onChange={handleFieldsChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center my-3 w-10">
                                <button className="m-2" type="submit">
                                    Enviar
                                </button>
                                <Link to={`/view/${tarefa._id}`}>
                                    <button>Voltar</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
