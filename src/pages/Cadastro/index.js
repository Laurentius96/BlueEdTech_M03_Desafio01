import React from 'react';
import Api from '../../api/api';
import { useNavigate, Link } from 'react-router-dom';

const Cadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = async evento => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;
        const descricao = evento.target.descricao.value;

        const tarefa = {
            titulo,
            prioridade,
            status,
            prazo,
            descricao,
        };
        console.log(tarefa);

        const response = await Api.fetchPost(tarefa);
        const result = await response.json();

        alert(result.message);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="card met-4 m-2">
                <div className="card-title text-center">
                    <h3 className="m-3">Cadastro de uma nova tarefa</h3>
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="row mb-4">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="titulo">Título:</label>
                                    <input
                                        id="titulo"
                                        className="form-control"
                                        type="text"
                                        placeholder="Digite o título da tarefa"
                                        name="titulo"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="prioridade">
                                        Prioridade:
                                    </label>
                                    <input
                                        id="prioridade"
                                        className="form-control"
                                        type="text"
                                        placeholder="Digite a prioridade da tarefa"
                                        name="prioridade"
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
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="descricao">
                                        Descrição:
                                    </label>
                                    <input
                                        id="descricao"
                                        className="form-control"
                                        type="text"
                                        placeholder="Digite a descrição da tarefa"
                                        name="descricao"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-3 w-10">
                            <button className="m-2" type="submit">
                                Enviar{' '}
                            </button>
                            <Link to={`/`}>
                                <button>Voltar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
