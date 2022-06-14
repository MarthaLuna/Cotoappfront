import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { NavAdmin } from '../../../Components/NavAdmin';
import { Footer } from '../../../Components/Home/Footer';
import GastoBuscar from './GastoBuscar';
import { useHttp } from "../../../Hooks/useHttp";
import { GastoBuscarRequest } from "./Services/GastoBuscarRequest";

const GastoBuscarPage = () => {
    const location = useLocation();
    const { concepto } = queryString.parse(location.search);
    const [gastos, setGastos] = useState([])

    const { loading, request, error, data } = useHttp(GastoBuscarRequest, {
        concepto: concepto,
    });

    useEffect(() => {
        request();
    }, [concepto]);

    useEffect(() => {
        if (Object.keys(data).length != 0) {
            setGastos(data.payload);
        }
    }, [data]);

    return (
        <div id="Home-Container">
            <NavAdmin />
            <div className="resultTable">
                <table>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Fecha de gasto</th>
                            <th>Comprobante</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {gastos.map((gasto) => (
                            <GastoBuscar key={gasto._id} {...gasto} />
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default GastoBuscarPage