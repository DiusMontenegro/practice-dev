import List from './List';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <main className="h-[320px] w-[960px] mx-auto flex rounded-lg mb-1">
            <Sidebar />
            <List />
        </main>
    );
};

export default Main;
