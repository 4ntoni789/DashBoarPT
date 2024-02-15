import { ventasAnuales } from "../scripts/dataBase";
import { Bar, Line } from "react-chartjs-2";
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
    Filler,
    BarElement
} from "chart.js";

chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
);

function Bars() {
    const state = useSelector(state => state.datosFilter);
    let dataBase = {
        meses: [],
        beneficios: []
    };
    ventasAnuales.map((ventaAño) => {
        if (state.filtro.filtroRess.año == ventaAño.año) {
            ventaAño.meses.map((mes) => {
                dataBase.meses.push(mes.mes);
                dataBase.beneficios.push(parseInt(mes.unidadesVendidas));
            })
        }
    })

    const miData = {
        labels: dataBase.meses,
        datasets: [
            {
                label: "Unidades Vendidas por mes",
                data: dataBase.beneficios,
                backgroundColor: "#1c7db688",
            }
        ]
    }

    var miOptions = {
        resposive: true,
        animation: true,
        plugins: {
            legend: {
                display: false
            }
        },

    }
    return (
        <Bar data={miData} options={miOptions} />
    )
}
export default Bars;