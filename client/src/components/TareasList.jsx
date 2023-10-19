import { useEffect, useState } from "react"
import { getAllTareas } from "../api/tareas.api"
import { TareaCard } from "./TareaCard";

export function TareasList() {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function loadTareas() {
            const res = await getAllTareas()
            setTareas(res.data);
        }
        loadTareas()
    }, []);
    return (
        <div className="grid grid-cols-3 gap-3">{tareas.map(tarea => (
            <TareaCard key={tarea.id} tarea={tarea} />
        ))}</div>
    )
} 