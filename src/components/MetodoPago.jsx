import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

ChartJS.register(ArcElement, Tooltip, Legend);


const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
    flex: 1,
  },
  image: {
    width: 320,
    height: 320,
    alignSelf: "center",
    marginVertical: 30,
  },
  dataBlock: {
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 10,
    color: "gray",
  },
});


const ReportePagoPDF = ({ chartImage, efectivo, tarjeta }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          src="/VETPROB.png" 
        />
        <Text style={styles.title}>Reporte de Métodos de Pago</Text>
      </View>

      {chartImage && <Image style={styles.image} src={chartImage} />}

      <View style={styles.dataBlock}>
        <Text> Pagos en efectivo: {efectivo}</Text>
        <Text> Pagos con tarjeta: {tarjeta}</Text>
        <Text> Total de pagos: {efectivo + tarjeta}</Text>
      </View>

      <Text style={styles.footer}>
        Generado automáticamente por el sistema -{" "}
        {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export const MetodoPago = () => {
  const [dataChart, setDataChart] = useState(null);
  const [chartImage, setChartImage] = useState(null);
  const [datos, setDatos] = useState({ efectivo: 0, tarjeta: 0 });
  const chartRef = useRef(null);

  useEffect(() => {
    const obtenerFacturas = async () => {
      try {
        const response = await fetch("http://localhost:4000/facturas/");
        const result = await response.json();
        const facturas = result.items || result;

        let efectivo = 0;
        let tarjeta = 0;

        facturas.forEach(({ id_metodo }) => {
          if (id_metodo === 1) efectivo++;
          else if (id_metodo === 2) tarjeta++;
        });

        setDatos({ efectivo, tarjeta });

        setDataChart({
          labels: ["Efectivo", "Tarjeta"],
          datasets: [
            {
              label: "Cantidad de Pagos",
              data: [efectivo, tarjeta],
              backgroundColor: ["#ff8110", "#ffd8a8"],
              borderColor: ["#ffffff", "#ffffff"],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener los métodos de pago:", error);
      }
    };

    obtenerFacturas();
  }, []);

  
  useEffect(() => {
    if (chartRef.current) {
      const base64Image = chartRef.current.toBase64Image();
      setChartImage(base64Image);
    }
  }, [dataChart]);

  return (
    <div>
      <h2 className="color-text mb-4 text-center">Métodos de Pago</h2>
      {dataChart ? (
        <>
          <Doughnut
            data={dataChart}
            ref={(element) => {
              if (element && element.canvas) {
                chartRef.current = element.chartInstance || element;
              }
            }}
          />
          {chartImage && (
            <div className="text-center mt-5">
              <PDFDownloadLink
                document={
                  <ReportePagoPDF
                    chartImage={chartImage}
                    efectivo={datos.efectivo}
                    tarjeta={datos.tarjeta}
                  />
                }
                fileName="reporte_metodos_pago.pdf"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#ff8110",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                {({ loading }) =>
                  loading ? "Generando PDF..." : "📄 Descargar Reporte PDF"
                }
              </PDFDownloadLink>
            </div>
          )}
        </>
      ) : (
        <p className="color-text">Cargando datos...</p>
      )}
    </div>
  );
};
