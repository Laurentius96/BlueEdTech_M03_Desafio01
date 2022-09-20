import React from 'react';
import ListToDo from '../../components/structure/ListToDo';

const Home = () => {
    return (
        <div className="container">
            <h1 className="text-center h1 mt-3">Lista de Tarefas</h1>
            <ListToDo />
        </div>
    );
};

export default Home;
