import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Header with TouchTrack and User Icon */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>TouchTrack</Text>
          <Icon name="person-circle-outline" size={42} color="white" style={styles.userIcon} /> 
        </View>

  {/* Buttons */}
  <TouchableOpacity style={styles.buttonStart}>
          <Text style={styles.buttonText}>Start Training</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonJoin}>
          <Text style={styles.buttonText}>Find My Team</Text>
        </TouchableOpacity>



        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home-outline" size={35} color="white" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="stats-chart-outline" size={35} color="white" />
            <Text style={styles.navText}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="football-outline" size={35} color="white" />
            <Text style={styles.navText}>Train</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="people-outline" size={35} color="white" />
            <Text style={styles.navText}>Team</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="settings-outline" size={35} color="white" />
            <Text style={styles.navText}>Options</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 55, // Adjust this to position the header below the notch
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Updated to dark blue with opacity, can change to 'rgba(0, 0, 0, 0.8)' for black
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 47,
    fontWeight: 'bold',
    color: 'white',

    fontFamily: 'Bebas Neue', // Font stays the same as requested
  },
  userIcon: {
    position: 'absolute',
    right: 20, // Position the icon on the right side
    top: '65%', // Ensure vertical centering
    transform: [{ translateY: -16 }], // Half of the icon's size to center it properly
  },
  buttonStart: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonJoin: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Bebas Neue', // Font stays the same
  },
  bottomNav: {
    position: 'absolute',
    bottom: 25, // Adjust this value to move the icons higher
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 64, // Adjusted to make the bottom bar taller
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Updated to dark blue with opacity, can change to 'rgba(0, 0, 0, 0.8)' for black
    paddingTop: 10, // Space for icons to fit
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 13, // Adjust size to make sure text fits
    color: 'white',
    marginTop: 4,
    fontFamily: 'Arial Rounded MT', // Bottom nav text stays Marker Felt
  },
});
