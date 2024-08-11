import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MainContent from "../components/MainContent";

const MisPaquetesScreen = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [historial, setHistorial] = useState([]);

  const handleSubmit = () => {
    handleTrack(trackingNumber);
  };

  const handleTrack = async (trackingNumber) => {
    // Simulación de datos de seguimiento
    const mockData = {
      trackingNumber,
      status: "En Camino",
      history: [
        { status: 'Recepción', date: '2024-06-01 08:00 AM' },
        { status: 'En Bodega', date: '2024-06-01 10:00 AM' },
        { status: 'En Camino', date: '2024-06-01 02:00 PM' },
        { status: 'Entregado', date: '2024-06-01 06:00 PM' },
      ],
    };
    setTrackingData(mockData);
  };

  const handleInputChange = (value) => {
    setTrackingNumber(value);
    if (!value.trim()) {
      setTrackingData(null);
      setHistorial([]);
    }
  };

  return (
    <MainContent>
      <View style={styles.container}>
        <Text style={styles.headerText}>Seguimiento de Paquetes</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el número de seguimiento"
          value={trackingNumber}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        {trackingData && (
          <ScrollView style={styles.trackingResult}>
            <Text style={styles.resultText}>Resultado del Seguimiento</Text>
            {trackingData.history.map((event, index) => (
              <View key={index} style={styles.eventContainer}>
                <Text style={styles.eventStatus}>{event.status}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </MainContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#00796b",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 3,
  },
  button: {
    backgroundColor: "#00796b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  trackingResult: {
    marginTop: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
    elevation: 4,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#00796b",
    textAlign: "center",
  },
  eventContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  eventStatus: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  eventDate: {
    fontSize: 14,
    color: "#888",
  },
});

export default MisPaquetesScreen;
