// components/FacturaPDF.jsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
    lineHeight: 1.5,
    color: '#333',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'right',
    textTransform: 'uppercase',
    color: '#007BFF',
  },
  section: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontWeight: 'bold',
    color: '#444',
  },
  fieldValue: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  divider: {
    borderBottom: '1 solid #ccc',
    marginVertical: 10,
  },
  totalBox: {
    marginTop: 20,
    padding: 10,
    border: '1 solid #007BFF',
    backgroundColor: '#f1f9ff',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#007BFF',
  },
});

export const FacturaPDF = ({ factura }) => (
  <Document>
    <Page size={[360, 400]} style={styles.page}>


      {/* Encabezado con logo y título */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          src="/VETPROB.png" // Cambia esto por tu logo
        />
        <Text style={styles.headerText}>Factura #{factura.id_factura}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Fecha:</Text>
          <Text style={styles.fieldValue}>{factura.fecha}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>ID Cita:</Text>
          <Text style={styles.fieldValue}>{factura.id_cita}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>ID Insumo:</Text>
          <Text style={styles.fieldValue}>{factura.id_insumo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Método de Pago:</Text>
          <Text style={styles.fieldValue}>{factura.id_metodo}</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Total: ${factura.precio}</Text>
      </View>
    </Page>
  </Document>
);


