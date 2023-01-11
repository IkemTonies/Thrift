import { createContext, useState } from "react";


const AppContext = createContext();

function AppProvider({children}) {
    const [uid,setUid] =useState('');
    const [email,setEmail] = useState('');
    const [userName,setUserName] = useState({fname:'',lname:''});
    
    return(
        <AppContext.Provider value={{uid,setUid,email,setEmail,userName,setUserName,}}>
            {children}

        </AppContext.Provider>
    )
}
export {AppContext,AppProvider}