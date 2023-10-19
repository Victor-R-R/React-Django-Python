import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTarea, deleteTarea, updatedTarea, getTarea } from '../api/tareas.api';
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';


export function TareasFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updatedTarea(params.id, data);
            toast.success('Tarea actualizada exitosamente', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            await createTarea(data);
            toast.success('Tarea creada exitosamente', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        navigate('/tareas');
    });

    useEffect(() => {
        async function loadTarea() {
            if (params.id) {
                const { data } = await getTarea(params.id);
                setValue('title', data.title);
                setValue('description', data.description);
            }
        }
        loadTarea();
    }, []);
    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register('title', { required: true })}
                    className='bg-zinc-700 px-3 py-2 rounded-lg block w-full mb-3'
                />
                {errors.title && <span>Este apartado es obligatorio</span>}
                <textarea rows="3" placeholder="Description"
                    {...register('description', { required: true })}
                    className='bg-zinc-700 px-3 py-2 rounded-lg block w-full mb-3'></textarea>
                {errors.description && <span>Este apartado es obligatorio</span>}

                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>

            {params.id &&
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async () => {
                        const accepted = window.confirm("¿Está seguro de eliminar esta tarea?");
                        if (accepted) {
                            await deleteTarea(params.id);
                            toast.success('Tarea eliminada exitosamente', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            navigate('/tareas')
                        };
                    }}>Delete</button>
                </div>
            }
        </div>
    )
}