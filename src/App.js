import { useState, useEffect } from 'react';
import './App.css';
import {db} from "./firebase"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [campoNuevo, setCampoNuevo] = useState(0)
  const [nuevoProducto, setNuevoProducto] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState(0);
  const [productos, setProductos] = useState([]);
  const productosColeccion = collection(db, "productos")

  const crearProducto = async () => {
    await addDoc(productosColeccion, {Fruta: nuevoProducto, Precio: nuevoPrecio});
  };

  const cambiarPrecio = async (id) => {
    const productosDoc = doc(db, "productos", id);
    await updateDoc(productosDoc, {Precio: campoNuevo});

  };

  const eliminarProducto = async (id) => {
    const productosDoc = doc(db, "productos", id);
    await deleteDoc(productosDoc);
  }

  useEffect(() =>{

    const getProductos = async () => {
      const data = await getDocs(productosColeccion);
      setProductos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getProductos()
  }, [])

  return (<div className="App">
    
    <input placeholder="Fruta" 
    onChange={(event) => {setNuevoProducto(event.target.value);
    }}/>
    <input type='number' placeholder="Precio"
    onChange={(event) => {setNuevoPrecio(event.target.value);
    }}/>
    <button onClick={crearProducto}>Crear Producto</button>
    {productos.map((producto) => {
      return(
      <div>
        {" "}
        <h1>Fruta: {producto.Fruta}</h1>
        <h1>Precio: {producto.Precio}</h1>
        <input placeholder='Cambiar Precio'
        onChange={(event) => {setCampoNuevo(event.target.value);
        }}/>
        <button onClick={() => {cambiarPrecio(producto.id)}}> Cambiar Precio </button>
        <button onClick={() => {eliminarProducto(producto.id)}}> Eliminar </button>
      </div>
      );
    })}
  </div>
  );
}

export default App;
