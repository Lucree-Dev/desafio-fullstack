import React from 'react';

const ListTransfer = (props) => {
    const {tranfers} = props;
    if (!tranfers || tranfers.length === 0) return <p>No tranfers, sorry</p>;
    return (
        <div className="container">
            <a href={"/transfer/add"} className="btn btn-success float-end">Add Tranfer</a>
            <h2 className='list-head'>List of Tranfers</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Friend Id</th>
                    <th scope="col">Value</th>
                    <th scope="col">Date</th>
                    <th scope="col">Card</th>
                </tr>
                </thead>
                <tbody>
                {tranfers.map((transfer) => {
                    return (
                        <tr>
                            <td>{transfer.user_id}</td>
                            <td>{transfer.friend_id}</td>
                            <td>{transfer.value}</td>
                            <td>{transfer.date}</td>
                            <td>{transfer.from_card}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
export default ListTransfer;

