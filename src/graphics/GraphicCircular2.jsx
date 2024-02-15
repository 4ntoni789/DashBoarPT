import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ventasAnuales } from "../scripts/dataBase";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function GraphicCircular2() {
  const state = useSelector(state => state.datosFilter);
  let dataBase = {
    GanaciasPerdidas: [
      "Recaudo Anual",
      "Inversion Anual",
      "Ganancias Anuales"
    ],
    valorVentaTotalAnual: []
  };
  let ventas = 0;
  let inversion = 0;
  ventasAnuales.map((ventaAño) => {
    if (state.filtro.filtroRess.año == ventaAño.año) {
      inversion = ventaAño.inversion;
      ventaAño.meses.map((mes) => {
        ventas += parseInt(mes.recaudoMensual);
      })
    }
  })
  dataBase.valorVentaTotalAnual.push(ventas, inversion, ventas - inversion);

  const miData = {
    labels: dataBase.GanaciasPerdidas,
    datasets: [
      {

        data: dataBase.valorVentaTotalAnual,
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
export default GraphicCircular2;