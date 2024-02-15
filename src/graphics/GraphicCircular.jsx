import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ventasAnuales } from "../scripts/dataBase";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function GraphicCircular() {
  const state = useSelector(state => state.datosFilter);
  let dataBase = {
    ordenes: [
      "Ventas Regulares Mensuales",
      "Ventas Canceladas Mensuales",
      "Devoluciones Mensuales"
    ],
    ordenesCantidad: []
  };
  ventasAnuales.map((ventaAño) => {
    if (state.filtro.filtroRess.año == ventaAño.año) {
      ventaAño.meses.map((mes) => {
        if(mes.mes == state.filtro.filtroRess.mes.mes){
          dataBase.ordenesCantidad.push(mes.tipoOrdenes.regular,mes.tipoOrdenes.canceladas,mes.tipoOrdenes.devoluciones);
        }
      })
    }
  })

  const miData = {
    labels: dataBase.ordenes,
    datasets: [
      {
        label: "Pedidos Mensuales",
        data: dataBase.ordenesCantidad,
        backgroundColor: [
          "#1c7db688",
          "rgba(255,99,132,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(153,102,255,0.2)",
        ],
        borderColor: [
          "#1c7db688",
          "rgba(255,99,132,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(153,102,255,0.2)",
        ],
      }
    ]
  }
  var miOptions = {
    resposive: true,
    maintainAspectRatio: false
  }

  return (
    <Pie data={miData} options={miOptions} />
  )
}
export default GraphicCircular;