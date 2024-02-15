import { ventasAnuales } from "../scripts/dataBase";
import { GETFILTERAÑOMES } from "../types";

const initialState = {
    ventasTotalesPorAño: ventasAnuales,
    filtro: {
        filtroRess: {
            año: 0,
            mes: "",
            unidadesVendidas: 0,
            ordenes: 0,
            tipoOrdenes: {
                regular: 0,
                canceladas: 0,
                devoluciones: 0
            },
            recaudoMensual: "0"
        }
    }
};

export default function filterVentaAñoReducer(state = initialState, action) {
    switch (action.type) {
        case GETFILTERAÑOMES: {
            let filtroRess;
            let ventaTotalAño = 0;
            ventasAnuales.map((año) => {
                if (action.value.año == año.año) {
                    año.meses.map((mes) => {
                        toString(ventaTotalAño += parseInt(mes.recaudoMensual))
                        if (mes.mes == action.value.mes) {
                            filtroRess = { mes: mes, año: año.año };
                        }
                    })
                }
            })
            
            return {
                ...state,
                filtro: { filtroRess, ventaTotalAño }
            }
        }

        default: {
            return state
        }
    }
}