import React, {useState} from 'react';
import {Button} from '@nextui-org/react';
import {Input} from '@nextui-org/react';
import {Link} from 'react-router-dom';

export default function Search(){
    const [formData, setFormData] = useState({carnet: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch('http://localhost:3001/api/auth/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                if(response.status === 406){
                    alert('El carnet no puede estar vacío');
                }
                else if(response.status === 409){
                    alert('Ya existe el usuario');
                }

                throw new Error('Error en la petición');
            }
            alert('Usuario no encontrado');
            const data = await response.json();
            console.log(data);
        }catch (error) {
            console.log('Error en la petición');
            console.error(error);
        }
    }


    return (
        <main>
            <div className='absolute top-0 right-10 m-4'>
                <div className='flex gap-4'>
                    <p> Ya tienes cuenta?</p>
                    <Link to='/login'> Login</Link>
                </div>      
            </div>
            <div className='flex flex-col justify-center items-center gap-10 h-screen'>
                <form onSubmit={handleSubmit}
                className='flex gap-10 w-2/3 mx-auto'>
                    <h2 className='text-pretty font-bold'>Bienvenido por favor introduce tu carnet de estudiante</h2>
                    <Input type='text' label='Carnet' name='carnet' value={formData.carnet} placeholder='Ejemplo 202200390' onChange={handleChange} />
                    <Button type='submit' color='secondary'>Siguiente</Button>
                </form>
                
            </div>
            
        </main>
    );
}