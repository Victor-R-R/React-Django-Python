import axios from 'axios';

const tareasApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/',
});

export const getAllTareas = () =>
    tareasApi.get('/')
    ;

export const getTarea = (id) =>
    tareasApi.get(`/${id}/`)
    ;

export const createTarea = (tarea) =>
    tareasApi.post('/', tarea);

export const deleteTarea = (id) =>
    tareasApi.delete(`/${id}/`);

export const updatedTarea = (id, tarea) =>
    tareasApi.put(`/${id}/`, tarea);