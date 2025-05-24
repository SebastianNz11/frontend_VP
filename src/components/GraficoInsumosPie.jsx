import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
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

const ReporteInsumosPDF = ({ chartImage, insumos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="/VETPROB.png" />
        <Text style={styles.title}>Reporte de Insumos</Text>
      </View>

      {chartImage && <Image style={styles.image} src={chartImage} />}

      <View style={styles.dataBlock}>
        {insumos.map((item, idx) => (
          <Text key={idx}>
            {item.nombre}: {item.cantidad}
          </Text>
        ))}
      </View>

      <Text style={styles.footer}>
        Generado automáticamente por el sistema -{" "}
        {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export const GraficoInsumosPie = () => {
  const [dataChart, setDataChart] = useState(null);
  const [insumos, setInsumos] = useState([]);
  const [chartImage, setChartImage] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const obtenerInsumos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/insumos`);
        const result = await response.json();
        const data = result.items || result;

        const labels = data.map((item) => item.nombre);
        const values = data.map((item) => item.cantidad);

        const backgroundColor = [
          "#ff8110",
          "#ff9f40",
          "#ffa94d",
          "#ffc078",
          "#ffe0b2",
          "#ffcc80",
          "#ffb74d",
          "#ffa726",
        ];

        setInsumos(data);

        setDataChart({
          labels,
          datasets: [
            {
              label: "Cantidad por Insumo",
              data: values,
              backgroundColor: backgroundColor.slice(0, labels.length),
              borderColor: "white",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener los insumos:", error);
      }
    };

    obtenerInsumos();
  }, []);

  // Captura imagen de la gráfica
  useEffect(() => {
    if (chartRef.current) {
      const base64Image = chartRef.current.toBase64Image();
      setChartImage(base64Image);
    }
  }, [dataChart]);

  return (
    <div>
      <h2 className="color-text mb-4 text-center">Cantidad de Insumos</h2>
      {dataChart ? (
        <>
          <Pie
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
                  <ReporteInsumosPDF
                    chartImage={chartImage}
                    insumos={insumos}
                  />
                }
                fileName="reporte_insumos.pdf"
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
