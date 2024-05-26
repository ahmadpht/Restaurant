import { createContext, useState } from "react"

export const MainContext = createContext(null)

const FoodContext = ({children}) => {

    const  [selectTag , setSelectTag] = useState('');
    const ContextValue = {
        selectTag,
        setSelectTag
    };

    return(
        <MainContext.Provider value={ContextValue}>
            {children}
        </MainContext.Provider>
    )
}

export default FoodContext
