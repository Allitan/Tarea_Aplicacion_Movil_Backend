import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Alumno } from '../Modelos/Alumno'
import { useContextAlumno } from '../Provider/ProviderAlumno'

export default function AgregarAlumnos() {

    const {agregarAlumno} = useContextAlumno();

    const [nombreAlumno, setNombreAlumno] = useState('')
    const [emailAlumno, setEmailAlumno] = useState('')
    const [cantidadClase, setCantidadClase] = useState('')

    function agregar(){

        let alumno:Alumno={
            idAlumno:0,
            nombreAlumno:nombreAlumno,
            emailAlumno:emailAlumno,
            cantidadClases:parseInt(cantidadClase)
        }

        agregarAlumno(alumno);
    }

    return (
        <View>
            <Text>Agregar Alumnos</Text>

            <TextInput placeholder='Nombre de Alumno'
                value={nombreAlumno}
                onChangeText={setNombreAlumno}
            ></TextInput>

            <TextInput placeholder='Email de Alumno'
                value={emailAlumno}
                onChangeText={setEmailAlumno}
            ></TextInput>

            <TextInput placeholder='Cantidad de clase del Alumno'
                value={cantidadClase}
                onChangeText={setCantidadClase}
            ></TextInput>

            <Button title='Agregar Alumno' onPress={agregar}></Button>
        </View>
    )
}