import './App.css';
import Header from "./components/header";
import ListPeople from "./components/listPeople";
import {useEffect, useState} from "react";
import withListLoading from './components/withListLoading';

function App() {
    const ListLoading = withListLoading(ListPeople);
    const [appState, setAppState] = useState({
        loading: false,
        people: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = `http://localhost:5000/account/friends`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((people) => {
                setAppState({loading: false, people: people});
            });
    }, [setAppState]);
    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <h1>List of people</h1>
            </div>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} people={appState.people}/>
            </div>

        </div>
    );
}

export default App;
