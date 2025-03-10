import { useState, useEffect } from 'react';
import InputNameContainer from "./InputNameContainer";
import InputAddresContainer from "./InputAddresContainer";
import InputSingleContainer from "./InputSingleContainer";

import "../../styles/styles.css";
export default function App() {
/*const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://demo5622332.mockable.io/user/1')
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        setUser(user)
      })
  }, [])*/
  const user = {
    idUser: "1",
    firstName: "Mauricio",
    secondName: "Javier",
    firstSurname: "Perera",
    secondSurname: "Gonzalvez",
    gender: "male",
    email: "123@email.com",
    avatar: "url(image)",
    phoneNumber: "55 55555555",
    addres: {
      country: "Mexico",
      citie: "Queretaro",
      addres: "R.Bautista 14"
    },
    identification: {
      nationality: "Uruguayan",
      idOfNationality: "5555555-5"
    },
    passport: "D222223",
    favorites: {
      idFavorite1: "1",
      idFavorite2: "2",
      idFavorite3: "3"
    }
  };
  const name = {
    firstName: user.firstName,
    secondName: user.secondName,
    firstSurname: user.firstSurname,
    secondSurname: user.secondSurname
  };
  const subName = {
    firstName: "Primer Nombre",
    secondName: "Segundo Nombre",
    firstSurname: "Primer Apellido",
    secondSurname: "Segundo Apellido"
  };
  const subAddres = {
    country: "País",
    citie: "Ciudad",
    addres: "Dirección"
  };
  return (
    <div className="personalInfo">
      <h2>Información personal</h2>
      <InputNameContainer label="Nombre legal" value={name}  sub={subName} type="alphabet" containerId="full-name"/>
      <InputSingleContainer label="Email" value={user.email} sub="Escriba su email" type="mail" containerId="email" /> 
      <InputSingleContainer label="Sexo" value={user.gender} sub="Escriba su sexo" type="select" containerId="sexo"/>
      <InputSingleContainer label="Número de teléfono" value={user.phoneNumber} sub="Escriba su número de teléfono" type="number" containerId="phone"/>      
      <InputSingleContainer label="Identificación" value={user.identification.idOfNationality} />
      <InputAddresContainer label="Dirección" value={user.addres}  sub={subAddres} />
      <InputSingleContainer label="Contacto de emergencia" value={user.phoneNumber} sub="Escriba su número de teléfono" type="number" containerId="emergencyPhone"/>
      <InputSingleContainer label="Pasaporte" value={user.passport} sub="Escriba su número de pasaporte" type="passport" containerId="passport"/>
    </div>
  );
}
