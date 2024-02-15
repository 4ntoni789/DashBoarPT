import { Line } from "react-chartjs-2";
import { ventasAnuales } from "../scripts/dataBase";
import { useSelector } from "react-redux";
import {
    Chart as chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function linesChart() {
    const state = useSelector(state => state.datosFilter);
    let dataBase = {
        meses: [],
        beneficios: []
    };
    ventasAnuales.map((ventaAño) => {
        if (state.filtro.filtroRess.año == ventaAño.año) {
            ventaAño.meses.map((mes) => {
                dataBase.meses.push(mes.mes);
                dataBase.beneficios.push(parseInt(mes.recaudoMensual));
            })
        }
    })
    
    const miData = {
        labels: dataBase.meses,
        datasets: [
            {
                label: "Recaudo mensual",
                data: dataBase.beneficios,
                tension: 0.5,
                fill: true,
                borderColor: "#1c7db6",
                backgroundColor: "#1c7db688",
                pointRadius: 5,
                pointBorderColor: "#1c7db6",
                pointBackgroundColor: "#1c7db6"
            }
        ]
    }

    var miOptions = {

    }
    return (
        <Line data={miData} />
    )
}
export default linesChart;