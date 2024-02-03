import "@/styles/globals.css";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function App({ Component, pageProps }) {
    const [user, setUser] = useState('User Name');

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}
