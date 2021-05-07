import React from 'react';

const ListPeople = (props) => {
    const {people} = props;
    if (!people || people.length === 0) return <p>No people, sorry</p>;
    return (
        <div className="container">
            <h2 className='list-head'>List of people</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {people.map((person) => {
                    return (
                        <tr key={person.user_id}>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.birthday}</td>
                            <td>{person.username}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
export default ListPeople;

