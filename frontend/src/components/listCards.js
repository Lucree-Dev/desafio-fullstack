import React from 'react';

const ListCards = (props) => {
    const {cards} = props;
    if (!cards || cards.length === 0) return <p>No billing cards, sorry</p>;
    return (
        <div className="container">
            <a href={"/account/card/add"} className="btn btn-success float-end">Add Card</a>
            <h2 className='list"-head'>List of Billing cards</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Pan</th>
                    <th scope="col">Expiry Month</th>
                    <th scope="col">Expiry Year</th>
                    <th scope="col">Date</th>
                </tr>
                </thead>
                <tbody>
                {cards.map((card) => {
                    return (
                        <tr key={card.card_id}>
                            <td>{card.pan}</td>
                            <td>{card.expiry_mm}</td>
                            <td>{card.expiry_yyyy}</td>
                            <td>{card.date}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
export default ListCards;

