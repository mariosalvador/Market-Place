
import { AuthLayout } from "@/components/layout/auth/authLayout"
import { IRouteProps } from "@/interfaces/routes/route"
import { Login } from "@/Pages/auth/login/Login"
import { Profile } from "@/Pages/auth/profile/Profile"
import { Register } from "@/Pages/auth/register/Register"



export const AuthRoutes : IRouteProps = {
    path:'/auth',
    element: AuthLayout,
    visibility:'auth',
    children:[
        {
            path:'/auth/login',
            element: Login,
            visibility: 'auth',
        },
        {
            path:'/auth/register',
            element: Register,
            visibility: 'auth',
        },
        {
            path:'/auth/profile',
            element: Profile,
            visibility: 'auth',
        },
    ],
}