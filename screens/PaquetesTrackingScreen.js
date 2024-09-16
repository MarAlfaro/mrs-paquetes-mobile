import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/client";
import Toast from "react-native-toast-message";
import CustomTimeline from "../components/CustomTimeline ";

const PaquetesTrackingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [paquetes, setPaquetes] = useState([]);
    const user = useSelector(state => state.login.user);
    const tracking = useSelector(state => state.tracking.tracking);
    const token = user.token;

    const mapPaquetesToTimeline = (paquetes) => {
        const groupedPaquetes = paquetes.reduce((acc, paquete) => {
            const date = new Date(paquete.fecha_movimiento).setHours(0, 0, 0, 0);
            
            if (!acc[date]) {
                acc[date] = [];
            }
    
            acc[date].push({
                title: paquete.estado,
                subtitle: paquete.numero_ingreso,
                date: new Date(paquete.fecha_movimiento).getTime()
            });
    
            return acc;
        }, {});

        return Object.keys(groupedPaquetes).map(date => ({
            date: parseInt(date, 10),
            data: groupedPaquetes[date]
        }));
    };

    useEffect(() => {
        const getPaquetes = async () => {
            try {
                const response = await fetchData(
                    `paquete/tracking-paquete/${tracking.tracking.id}`,
                    {},
                    { Authorization: `Bearer ${token}` }
                );
                const timelineData = mapPaquetesToTimeline(response);
                setPaquetes(timelineData);
            } catch (error) {
                Toast.show({
                    type: 'info',
                    text1: 'Aviso',
                    text2: `No tienes órdenes disponibles!`
                });
            }
        };
        getPaquetes();
    }, [token, tracking.tracking.id]);

    return <CustomTimeline data={paquetes} />;
};

export default PaquetesTrackingScreen;
