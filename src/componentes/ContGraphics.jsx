import "../css/graphics.css";
import { useSelector } from 'react-redux';
import LinesChart from "../graphics/LinesChart";
import { calcularPunto } from "../scripts/calcularPunto";

function ContGraphics(props) {
  const state = useSelector(state => state.datosFilter);

  return (
    <div className='App__pageAnalicis__Graphics'>
      <div className='App__pageAnalicis__Graphics__setBlocks'>
        <div className='App__pageAnalicis__Graphics__setBlocks__block'>
          <h1>${calcularPunto(String(state.filtro.ventaTotalAño == undefined ? 0 : state.filtro.ventaTotalAño))}</h1>
          <h5>Venta Anual</h5>
          <h5>año {state.filtro.filtroRess.año}</h5>
        </div>
        <div className='App__pageAnalicis__Graphics__setBlocks__block'>
          <h1>{calcularPunto(String(state.filtro.filtroRess.mes.unidadesVendidas == undefined ? 0
            : state.filtro.filtroRess.mes.unidadesVendidas))}
          </h1>
          <h5>Unid. Vendidas mensuales</h5>
        </div>
        <div className='App__pageAnalicis__Graphics__setBlocks__block'>
          <h1>${calcularPunto(String(state.filtro.filtroRess.mes.ordenes == undefined ? 0
            : state.filtro.filtroRess.mes.ordenes))}</h1>
          <h5>Ordenes Mensuales</h5>
        </div>
        <div className='App__pageAnalicis__Graphics__setBlocks__block'>
          <h1>${calcularPunto(String(state.filtro.filtroRess.mes.recaudoMensual == undefined ? 0
            : state.filtro.filtroRess.mes.recaudoMensual))}</h1>
          <h5>Total Reacudo</h5>
        </div>
      </div>
      <div className='App__pageAnalicis__Graphics__block02'>
        <LinesChart />
      </div>
    </div>
  );
}

export default ContGraphics;