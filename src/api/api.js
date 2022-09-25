const Api = {
    apiUrl: 'https://blueedtech-tarefas.herokuapp.com/tarefas',
    fetchGetAll: () => fetch(`${Api.apiUrl}/get-tarefas`),
    fetchGetById: id => fetch(`${Api.apiUrl}/get-tarefa-id/${id}`),
    fetchPost: data => {
        return fetch(`${Api.apiUrl}/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    },
    fetchPut: (tarefa, id) => {
        return fetch(`${Api.apiUrl}/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(tarefa),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    },
    fetchDelete: id => {
        return fetch(`${Api.apiUrl}/delete/${id}`, {
            method: 'DELETE',
        });
    },
};

export default Api;
