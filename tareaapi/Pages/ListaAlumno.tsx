import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alumno } from '../Modelos/Alumno';
import { useContextAlumno } from '../Provider/ProviderAlumno';

export default function ListaAlumno() {

    const {listaAlumnos, listarAlumnos, eliminarAlumno } = useContextAlumno();

    useEffect(() => {
        listarAlumnos()
    }, []);

    useEffect(() => {
        console.log(listaAlumnos)
    }, [listaAlumnos])


    return (
        <View>
            <Text>Listado de Alumnos </Text>
            {
                listaAlumnos.length == 0 ? (
                    <Text>Informacion Cargando</Text>
                )
                    : (

                        <FlatList data={listaAlumnos}
                            keyExtractor={(item) => item.idAlumno.toString()}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>Nombre Alumno: {item.nombreAlumno}</Text>
                                    <Text>Email Alumno: {item.emailAlumno}</Text>
                                    <Text>Cantidad Clase : {item.cantidadClases}</Text>
                                    <Button title='Eliminar' onPress={()=> eliminarAlumno(item.idAlumno)}/>
                                </View>

                            }
                        >

                        </FlatList>
                    )
            }
        </View>
    )
}