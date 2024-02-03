import MainLayout from '@/layout/MainLayout.jsx'
import { useContext, useState } from "react";
import { UserContext } from "./_app";

const todos = 'Todos';
const completed = 'Completed';

export default function Page() {
    const {user, setUser} = useContext(UserContext);

    const [activeTab, setActiveTab] = useState(todos);

    return (
        <MainLayout className="Dashboard">
            <div>
                <div>{user}</div>
                <button onClick={() => setUser('John Doe')}>
                    Change User Name
                </button>
            </div>
            <div className="flex">
                <button className="btn"
                    onClick={() => setActiveTab(todos)}>
                    {todos}
                </button>
                <button className="btn"
                    onClick={() => setActiveTab(completed)}>
                    {completed}
                </button>
            </div>
            {activeTab == todos && (
                <div>Todos tab</div>
            )}
            {activeTab == completed && (
                <div>Completed</div>
            )}
        </MainLayout>
    );
}