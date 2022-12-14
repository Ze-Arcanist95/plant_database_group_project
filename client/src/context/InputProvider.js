import { useState, createContext } from "react";

const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState({
        search: "",
    });

    return (
        <InputContext.Provider value={{
            inputValue,
            setInputValue,
        }}>
            {children}
        </InputContext.Provider>    
    )
}

export default InputContext;