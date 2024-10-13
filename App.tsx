import "./global.css";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { Header } from "./src/components/header";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </>
  );
}
