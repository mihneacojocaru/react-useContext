import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentCounter, setCurrentCounter] = useState(0);
  const [color, setColor] = useState("#f3f");

  // useEffect(()=>{
  //     if(localStorage.getItem('currentMode'))
  //         setCurrentState(localStorage.getItem(''))
  // },[])

  return (
    <StateContext.Provider
      value={{ currentCounter, setCurrentCounter, color, setColor }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
