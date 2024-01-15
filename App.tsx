import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {measureConnectionSpeed} from 'react-native-network-bandwith-speed';

const {height} = Dimensions.get('screen');

function App(): React.JSX.Element {
  const [speed, setSpeed] = useState(0);

  getNetworkBandwidth = async () => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      //console.log(networkSpeed);    // Network bandwidth speed
      //setSpeed(networkSpeed.speed); // Set Network bandwidth speed
      setSpeed(parseFloat(networkSpeed.speed.toFixed(0))); // Two decimal
    } catch (err) {
      console.log(err);
    }
  };

  this.getNetworkBandwidth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.viewTitle}>
          <Image
            style={styles.image}
            source={require('./assets/img/logo_internet-speedometer.png')}
          />
          <Text style={styles.label}>Your Internet speed is</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.speed}>{speed}</Text>
          <Text style={styles.mbps}>Mbps</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewTitle: {
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  speed: {
    fontSize: 76,
    marginTop: 18,
    fontWeight: 'bold',    
    justifyContent: 'center',
    alignItems: 'center',
  },
  mbps: {
    fontSize: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
  },
  image: {
    width: 320,
    height: 160,
  },
});

export default App;
