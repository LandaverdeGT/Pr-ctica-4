import React from 'react';
import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import {Button} from '@nextui-org/react'
import {Input} from '@nextui-org/react'
import { Link } from 'react-router-dom';

export default function Login(){
    const [formData, setFormData] = useState({carnet: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                if(response.json().message === 'Carnet and Password do not be blank'){
                    alert('Carnet y contraseña no pueden estar vacíos');
                }
                throw new Error('Error en la petición');
            }
            alert('Inicio de sesión exitoso');
            const data = await response.json();
            console.log(data);
        }catch (error) {
            console.log('Error en la petición');
            console.error(error);
        }
    };

    return (
        <main>
            <div className='flex flex-col my-72 gap-9 justify-center place-items-center align-middle'>
                <div className='flex gap-6 justify-center'>
                    <img src='https://files.ingebook.com/ib/img/ingebook/ESP/logos_biblioteca/USAC%20transparente.png' alt='logo' className='w-20 h-20 mx-auto'/>
                    <div className='flex-col gap-2 justify-center'>
                        <h1 className='text-4xl font-bold'>Facultad de Ingeniería</h1>
                        <h3> Universidad de San Carlos de Guatemala</h3>
                    </div>
                </div>
                <div>
                    <h2> Iniciar Sesión Ingeniería USAC</h2>
                </div>
                <form onSubmit={handleSubmit} 
                className="flex flex-col gap-4 justify-center place-items-center align-middle"
                >
                <div className="flex gap-4 justify-center">
                    <Input  type="text" color='secondary' label="Usuario" name='carnet' value={formData.carnet} onChange={handleChange}/>
                    <Input type="password" color='secondary' label="Contraseña" name='password' value={formData.password} onChange={handleChange}/>
                </div>
                <Button className='my-2' type='submit' color='primary'>Iniciar Sesión</Button>
                <p> Aún no te has registrado? <Link to='/search'>Crear tu cuenta</Link></p>
                </form>
            </div>
            <footer className='flex justify-center'>
                <p>© 2024 Facultad de Ingeniería USAC</p>
            </footer>
        </main>
    );
}