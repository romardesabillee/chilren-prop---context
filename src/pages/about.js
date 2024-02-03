import MainLayout from '@/layout/MainLayout'
import { useContext } from "react";
import { UserContext } from "./_app";

export default function About() {
    const {user, setUser} = useContext(UserContext);

    return (
        <MainLayout title="About">
            <div>
                {user}
            </div>
        </MainLayout>
    );
}
