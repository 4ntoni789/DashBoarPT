import React from 'react';
import "../css/analisisVentas.css"
import Filters from '../componentes/Filters';
import ContGraphics from '../componentes/ContGraphics';
import ContGraphics2 from '../componentes/ContGraphics2';
function AnalisisVentas(props) {
  return (
    <div className='App__pageAnalicis'>
      <h3 className='App__pageAnalicis__titlePage'>Análisis de Ventas Anuales</h3>
      <Filters />
      <ContGraphics/>
      <ContGraphics2/>
    </div>
  );
}

export default AnalisisVentas;