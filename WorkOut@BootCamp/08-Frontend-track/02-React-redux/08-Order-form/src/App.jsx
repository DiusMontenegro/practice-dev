import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
    const [dark, setDark] = useState(false);
    return (
        <div className={`h-screen ${dark ? 'dark' : ''}`}>
            <Navbar setDark={setDark} />
            <Form/>
        </div>
    );
};

export default App;
