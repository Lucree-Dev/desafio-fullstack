import {useEffect, useState} from "react";
import WithListLoading from "./withListLoading";
import ListTransfer from "./listTransfer";

function TransferPage() {
    const ListLoading = WithListLoading(ListTransfer);
    const [appState, setAppState] = useState({
        loading: false,
        transfers: null,
    });

    useEffect(() => {
        setAppState({loading: true , transfers: null });
        const apiUrl = `http://localhost:5000/account/bank-statement`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((tranfers) => {
                setAppState({loading: false, tranfers: tranfers});
            });
    }, [setAppState]);
    return (
        <div className='App'>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} tranfers={appState.tranfers}/>
            </div>

        </div>
    );
}

export default TransferPage;
