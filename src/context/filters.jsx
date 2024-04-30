import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const FiltersContext = createContext();


export function FiltersProvider ({ children }){
    const [ filters, setFilter] = useState({
        category: 'all',
        minPrice: 500
    });

    return(
    
    <FiltersContext.Provider value={{
            filters,
            setFilter,
        }}
        >
        {children}
    </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = { 
    children: PropTypes.any.isRequired,
     // Aquí puedes definir el tipo específico de filters si lo deseas};
}