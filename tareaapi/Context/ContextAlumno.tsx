import { createContext } from "react";
import { Alumno } from "../Modelos/Alumno";
import ListaAlumno from "../Pages/ListaAlumno";
import AgregarAlumnos from "../Pages/AgregarAlumnos";

export const contextAlumno=createContext({
    listaAlumnos: [] as Alumno[],
    setListaAlumnos: (alumno:Alumno[])=>{},
    agregarAlumno: (alumno:Alumno) => {},
    listarAlumnos: ()=> {},
    eliminarAlumno:(idAlumno:number) => {}
})