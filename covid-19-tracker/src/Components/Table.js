import React from 'react';
import numeral from 'numeral';
import './Table.css';

const Table = ({ countries }) => {
    return (
        <div className="table">
            {
                countries.map(({ country, cases }) => (
                    <tr>
                        <td>{country}</td>
                        <strong>
                            <td>{numeral(cases).format("0,0")}</td>
                        </strong>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table
