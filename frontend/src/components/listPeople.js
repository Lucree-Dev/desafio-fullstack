import React from 'react';

const ListPeople = (props) => {
    const {people} = props;
    if (!people || people.length === 0) return <p>No people, sorry</p>;
    return (
        <div className="container">
            <a href={"/person/add"} className="btn btn-success float-end">Add Person</a>
            <h2 className='list-head'>List of people</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Username</th>
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

