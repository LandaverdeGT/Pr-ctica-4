import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './Home.css'
import { Button } from '@nextui-org/react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import {AcmeLogo} from "./AcmeLogo.jsx";


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar>
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" color='secondary'>
            Estudiantes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Profesores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Cursos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to='/login'>
          <Button color="secondary" href="#" variant="flat">
            Login
          </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/Register'>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  )
}
