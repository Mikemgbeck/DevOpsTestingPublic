import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import UserForm from "../components/User/UserForm.tsx";
import UserTable from "../components/User/UserTable.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'createUser', element: <UserForm key='create' />},
            {path: 'editUser/:id', element: <UserForm key='edit' />},
            {path: '*', element: <UserTable/>}
        ]
    }
]

export const router = createBrowserRouter(routes)