import {useEffect, useState} from "react";
import ListCards from "./listCards";
import WithListLoading from "./withListLoading";

function CardPage() {
    const ListLoading = WithListLoading(ListCards);
    const [appState, setAppState] = useState({
        loading: false,
        cards: null,
    });

    useEffect(() => {
        setAppState({loading: true , cards: null });
        const apiUrl = `http://localhost:5000/account/cards`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((cards) => {
                setAppState({loading: false, cards: cards});
            });
    }, [setAppState]);
    return (
        <div className='App'>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} cards={appState.cards}/>
            </div>

        </div>
    );
}

export default CardPage;
