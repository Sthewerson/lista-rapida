// App.js - Aplicativo de Lista de Compras
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState("");

  const adicionarItem = () => {
    if (item.trim()) {
      setLista([
        ...lista,
        { id: Date.now().toString(), nome: item, comprado: false },
      ]);
      setItem("");
    }
  };

  const marcarComprado = (id) => {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const removerItem = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista Rápida</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicionar item"
        value={item}
        onChangeText={setItem}
      />
      <Button title="Adicionar" onPress={adicionarItem} />
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <TouchableOpacity onPress={() => marcarComprado(item.id)}>
              <Ionicons
                name={item.comprado ? "checkmark-circle" : "ellipse-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={[styles.texto, item.comprado && styles.comprado]}>
              {item.nome}
            </Text>
            <TouchableOpacity onPress={() => removerItem(item.id)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemLista: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    width: "100%",
  },
  texto: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  comprado: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
