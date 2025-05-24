import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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
    width: 500,
    height: 300,
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

const ReporteEspeciesPDF = ({ chartImage, datos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="/VETPROB.png" />
        <Text style={styles.title}>Reporte de Mascotas por Especie</Text>
      </View>

      {chartImage && <Image style={styles.image} src={chartImage} />}

      <View style={styles.dataBlock}>
        {datos.map((item, idx) => (
          <Text key={idx}>
            {item.especie}: {item.cantidad} mascota(s)
          </Text>
        ))}
      </View>

      <Text style={styles.footer}>
        Generado automáticamente por el sistema - {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export const GraficoEspecies = () => {
  const [dataChart, setDataChart] = useState(null);
  const [datos, setDatos] = useState([]);
  const [chartImage, setChartImage] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/mascotas`);
        const result = await response.json();
        const mascotas = result.items || result;

        const conteo = contarPorEspecie(mascotas);

        const labels = Object.keys(conteo);
        const values = Object.values(conteo);
        const backgroundColor = Array(labels.length).fill("#f89842");
        const borderColor = Array(labels.length).fill("#f89842");

        const datosFormateados = labels.map((especie, i) => ({
          especie,
          cantidad: values[i],
        }));

        setDatos(datosFormateados);

        setDataChart({
          labels,
          datasets: [
            {
              label: "Cantidad de Mascotas por Especie",
              data: values,
              backgroundColor,
              borderColor,
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const contarPorEspecie = (mascotas) => {
    const conteo = {};
    mascotas.forEach((mascota) => {
      const especie = mascota.especie;
      conteo[especie] = (conteo[especie] || 0) + 1;
    });
    return conteo;
  };

  useEffect(() => {
    if (chartRef.current) {
      const base64Image = chartRef.current.toBase64Image();
      setChartImage(base64Image);
    }
  }, [dataChart]);

  return (
    <div>
      <h2 className="color-text mb-5 text-center">Mascotas por Especie</h2>
      {dataChart ? (
        <>
          <Bar
            data={dataChart}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    precision: 0,
                    stepSize: 1,
                  },
                },
              },
            }}
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
                  <ReporteEspeciesPDF chartImage={chartImage} datos={datos} />
                }
                fileName="reporte_especies.pdf"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f89842",
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
