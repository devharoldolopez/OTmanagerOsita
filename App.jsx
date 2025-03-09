import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AdjuntosOT from "./src/adjuntosOT/AdjuntosOT";
import Login from "./src/login/Login";
import Projects from "./src/projects/Projects";
import GestionesOT from "./src/gestionesOT/GestionesOT";
import AdminProjects from "./src/adminProjects/AdminProjects";
import ModalAdmin from "./src/components/ModalAdmin";
import { useEffect, useState } from "react";
import ModalUser from "./src/components/ModalUser";
import ModalOt from "./src/components/ModalOt";

export default function App() {
  const config = {
    screens: {
      Home: {
        screen: Login,
        options: {
          headerRight: () => (
            <Button onPress={() => alert("This is a button!")}>Info</Button>
          ),
        },
      },
    },
  };

  const Stack = createStackNavigator(config);
  const [modalVisibleAdmin, setModalVisibleAdmin] = useState(false);
  const [modalVisibleUser, setModalVisibleUser] = useState(false);
  const [modalVisibleOt, setModalVisibleOt] = useState(false);

  return (
    <>
    <ModalAdmin isVisible={modalVisibleAdmin} setModalVisible={setModalVisibleAdmin} ></ModalAdmin>
    <ModalUser isVisible={modalVisibleUser} setModalVisible={setModalVisibleUser}></ModalUser>
    <ModalOt isVisible={modalVisibleOt} setModalVisible={setModalVisibleOt}></ModalOt>

      <View style={styles.back}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              cardStyle: { backgroundColor: "#ffffff" },
            }}
          >
            <Stack.Screen         screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold', // Nombre de la fuente personalizada
            fontSize: 20, // Tamaño de fuente opcional
            color: 'red', // Color opcional
          },
        }} name="Login" component={Login} />
            <Stack.Screen
              name="Projects"

              
              component={Projects}
              options={({ navigation }) => ({
                title: "Proyectos",
                headerRight: () => (
                  <View style={styles.headerButtonContainer}>
                    <Icon
                      style={styles.containerIconSetting}
                      name="settings"
                      size={35}
                      color="#06BCC1"
                      onPress={() => navigation.navigate('Administración')}
                    />
                    <Icon
                      name="log-out"
                      size={35}
                      color="#06BCC1"
                      style={styles.iconBack}
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                ),
              })}
            />
            <Stack.Screen name="Administración" component={AdminProjects} options={({ navigation }) => ({
                title: "Proyectos",
                headerRight: () => (
                  <View style={styles.headerButtonContainer}>
                    <Icon
                      style={styles.containerIconSetting}
                      name="add-circle"
                      size={35}
                      color="#EE964B"
                      onPress={() => setModalVisibleAdmin(true)}
                    />
                    <Icon
                      name="person-add"
                      size={35}
                      color="#EE964B"
                      style={styles.iconBack}
                      onPress={() => setModalVisibleUser(true)}
                    />
                  </View>
                ),
              })} />
            <Stack.Screen name="Lista de OT's" component={GestionesOT} options={({ navigation }) => ({
                title: "Listado de OT's",
                headerRight: () => (
                  <View style={styles.headerButtonContainer}>
                    <Icon
                      style={styles.containerIconSetting}
                      name="add-circle"
                      size={35}
                      color="#06BCC1"
                      onPress={() => setModalVisibleOt(true)}
                    />
                  </View>
                ),
              })} />
            <Stack.Screen name="Editor OT" component={AdjuntosOT} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  back: {
    flex: 1,
    backgroundColor: "white",
  },
  headerButtonContainer: {
    marginRight: 10, // Añade un margen para que no esté pegado al borde
    flexDirection: "row",
  },
  containerIconSetting: {
    paddingRight: 25,
  
  }
});
