import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenteredLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo Guys! Daztyn Disini</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.leftBox]} />
        <View style={[styles.box, styles.rightBox]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Blue', // Abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 50, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40, // Memberikan ruang di sisi kiri dan kanan
  },
  box: {
    width: 100,
    height: 100,
  },
  leftBox: {
    backgroundColor: '#D41A1F', // Warna merah muda
  },
  rightBox: {
    backgroundColor: '#0000CD', // Warna tosca
  }
});

export default CenteredLayout;