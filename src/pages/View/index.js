import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const View = () => {
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    const [tarefa, setTarefa] = useState([]);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getTarefaById();
    }, []);

    const abreModal = () => setOpen(true);
    const fechaModal = () => setOpen(false);

    const getTarefaById = async () => {
        try {
            const request = await Api.fetchGetById(id);

            if (request.status === 400) {
                alert('Erro na API, ID inválido');
            }

            if (request.status === 500) {
                console.error('Erro na servidor');
            }

            const tarefa = await request.json();

            setTarefa(tarefa);

            console.log(tarefa);
        } catch (error) {
            console.log('Erro', error);
        }
    };

    const handleDelete = async () => {
        const response = await Api.fetchDelete(id);
        const data = await response.json();
        alert(data.message);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12">
                    <div className="card p-3">
                        <h4 className="text-center h2 mt-3">
                            Tarefa: {tarefa.titulo}{' '}
                        </h4>
                        <br></br>
                        <p className="text-center">
                            Prioridade: {tarefa.prioridade}
                        </p>
                        <p className="text-center">Status: {tarefa.status}</p>
                        <p className="text-center">Prazo: {tarefa.prazo}</p>
                        <p className="text-center">
                            Criação: {tarefa.dataCriacao}
                        </p>
                        <p className="text-center">
                            Descrição: {tarefa.descricao}
                        </p>
                        <div className="text-center my-3 w-10">
                            <Link to={`/edit/${tarefa._id}`}>
                                <button className="m-2">Editar</button>
                            </Link>
                            <button onClick={abreModal}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={fechaModal} center>
                <h2 className="my-4">Deseja realmente excluir a tarefa ?</h2>
                <div className="d-flex w-50 mx-auto justify-content-around">
                    <button onClick={fechaModal}>Não</button>
                    <button onClick={handleDelete}>Sim</button>
                </div>
            </Modal>
        </div>
    );
};

export default View;
