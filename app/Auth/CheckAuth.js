'use client';
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import LoginForm from "../Components/LoginForm";

export default function CheckAuth(props) {

    const [loading, setLoading] = useState(true);
    const { signUp, signIn, signOutt ,currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            await new Promise((res) => setTimeout(res, 50));
            setLoading(false);
        };
        checkAuth();
    }, [currentUser])

    return (
        <div>
            {
                // user && !loading && !NotAnAdmin() ?
                // <>
                //     <NotAdmin/>
                // </>
                // :
                !loading && !currentUser ?
                    <LoginForm/>
                    :
                    !loading && currentUser ?
                        <div>
                                <div>
                                    <NavBar />
                                </div>
                                <div className='mt-40'>
                                    {props.children}
                                </div>
                        </div>
                        :
                        null
            }
        </div>
    )
}