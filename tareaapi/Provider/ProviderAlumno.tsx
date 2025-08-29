import { View, Text, Alert } from 'react-native'
import React, { ReactNode, useState, useContext } from 'react'
import { Alumno } from '../Modelos/Alumno'
import { contextAlumno } from '../Context/ContextAlumno'

interface Plantilla {
    children: ReactNode
}

export default function ProviderAlumno({ children }: Plantilla) {

    const [listaAlumnos, setListaAlumnos] = useState<Alumno[]>([]);

    async function agregarAlumno(alumno: Alumno) {
        const respuesta = await fetch('http://192.168.1.43:5000/alumno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumno)
        });

        const respuestaApi = await respuesta.json()

        if (respuestaApi) {
            Alert.alert("ALumno agregado")
            listarAlumnos()
        }
        else {
            Alert.alert('Ocurrio un error')
        }
    }

    async function listarAlumnos() {
        const response = await fetch('http://192.168.1.43:5000/alumno', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const listado = await response.json();
        console.log('Listado desde fetch:', listado); 
        setListaAlumnos(listado)
    }

    async function eliminarAlumno(idAlumno:number){
        const respuesta = await fetch(`http://192.168.1.43:5000/alumno/${idAlumno}`,{
            method: 'DELETE',
        });
        if(respuesta.ok){
            setListaAlumnos(prev => prev.filter(p => p.idAlumno !== idAlumno))
            Alert.alert('Alumno eliminado Correctamente');
        }else{
            Alert.alert('No se pudo eliminar el alumno');
        }
    }

    return (
        <contextAlumno.Provider value={{ listaAlumnos, setListaAlumnos, agregarAlumno, listarAlumnos, eliminarAlumno}}>
            {children}
        </contextAlumno.Provider>
    )
}

export function useContextAlumno(){
    return useContext(contextAlumno)
}