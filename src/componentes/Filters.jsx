import React, { useEffect, useState } from 'react';
import "../css/filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { get__filter__año__mes } from '../actions/filterVentaAction';

function Filters(props) {
  const dispatch = useDispatch();
  const [año, setAño] = useState("");
  const [mes, setMes] = useState("");
  
  return (
    <div className='App__pageAnalicis__filters'>
      <select className='App__pageAnalicis__filters__filterMes' onChange={(e) => setMes(e.target.value)}>
        <option value="">Selecione un Mes</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>
      <select className='App__pageAnalicis__filters__filterMes' onChange={(e) => setAño(e.target.value)}>
        <option value="">Selecione un Año</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <button className='App__pageAnalicis__filters__btnSubmit' onClick={() => {
        año == "" || mes == "" ?
          alert("porfavor Llenar todos los campos")
          :
          dispatch(get__filter__año__mes({ año: año, mes: mes }));
      }}><FontAwesomeIcon icon={faBars} /> Filtrar</button>
    </div>
  );
}

export default Filters;