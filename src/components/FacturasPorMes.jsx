import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

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

const ReporteFacturasPDF = ({ chartImage, datos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="/VETPROB.png" />
        <Text style={styles.title}>Reporte de Facturas por Mes</Text>
      </View>

      {chartImage && <Image style={styles.image} src={chartImage} />}

      <View style={styles.dataBlock}>
        {datos.map((item, idx) => (
          <Text key={idx}>
            {item.mes}: {item.cantidad} factura(s)
          </Text>
        ))}
      </View>

      <Text style={styles.footer}>
        Generado automáticamente - {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export const FacturasPorMes = () => {
  const [dataChart, setDataChart] = useState(null);
  const [datos, setDatos] = useState([]);
  const [chartImage, setChartImage] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const obtenerFacturas = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/facturas`);
        const result = await response.json();
        const facturas = result.items || result;

        const conteoPorMes = {};
        facturas.forEach(({ fecha }) => {
          const date = new Date(fecha);
          const mes = date.toLocaleString("default", {
            month: "short",
            year: "numeric",
          });
          conteoPorMes[mes] = (conteoPorMes[mes] || 0) + 1;
        });

        const labels = Object.keys(conteoPorMes).sort((a, b) => {
          const [mesA, añoA] = a.split(" ");
          const [mesB, añoB] = b.split(" ");
          return (
            new Date(`${mesA} 1, ${añoA}`) - new Date(`${mesB} 1, ${añoB}`)
          );
        });

        const values = labels.map((label) => conteoPorMes[label]);
        const datosFormateados = labels.map((mes, i) => ({
          mes,
          cantidad: values[i],
        }));

        setDatos(datosFormateados);

        setDataChart({
          labels,
          datasets: [
            {
              label: "Facturas por Mes",
              data: values,
              borderColor: "#ff8110",
              backgroundColor: "rgba(255, 129, 16, 0.2)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
              pointBackgroundColor: "#ff8110",
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener las facturas:", error);
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
      <h2 className="color-text mb-4 text-center">Facturas Emitidas por Mes</h2>
      {dataChart ? (
        <>
          <Line
            data={dataChart}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                    callback: function (value) {
                      return Number.isInteger(value) ? value : null;
                    },
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
                  <ReporteFacturasPDF chartImage={chartImage} datos={datos} />
                }
                fileName="reporte_facturas.pdf"
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
