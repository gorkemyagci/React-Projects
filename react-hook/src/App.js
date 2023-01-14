import React, { useCallback, useMemo, useReducer } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case "SET_TEXT":
        return {
          ...state,
          product: action.value
        }
      case "ADD_PRODUCT":
        return {
          ...state,
          product: '',
          products: [...state.products, state.product]
        }
      case "SET_SEARCH":
        return{
          ...state,
          search: action.value
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    product: '',
    search: ''
  })

  const handleSearch = useCallback((e) => {
    dispatch({
      type: "SET_TEXT",
      value: e.target.value
    })
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: "ADD_PRODUCT",
      value: state.product
    })
  },[state.product]);



  const searchHandle = e => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value
    })
  }

  const filteredProducts = useMemo(() => {
    return state.products.filter(product => product.toLowerCase().includes(state.search.toLowerCase()));
  },[state.products, state.search])

  return (
    <div className="App" style={{marginTop: "50px"}}>
      <input 
      type="text"
      placeholder="Todo ara.."
      value={state.search}
      onChange={searchHandle}
      />
      <hr/>
      <AddTodo handleSearch={handleSearch} handleSubmit={handleSubmit} product={state.product} />
      <Todos products={filteredProducts} />
    </div>
  );
}

export default App;
