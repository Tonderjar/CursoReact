import { ReactNode, useState } from "react"
import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Diego Lezama',
    email: 'diego@computron.com',
}


export const UserProvider = ({children}:{children: ReactNode[]}) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
