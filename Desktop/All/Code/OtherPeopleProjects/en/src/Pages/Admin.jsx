



import React from "react";
import { Table } from "reactstrap";

const Admin = (props) => {
    return (
        <div>

            <h5 style={{
                textAlign: "center",
                margin: '2em'
            }} >admin logs</h5>
            <Table
                className="m-4 p-4"
                style={{
                    width: "70em",
                }}
                striped
            >
                <thead>
                    <tr>

                        <th>Tag </th>
                        <th>User Name</th>
                        <th>Created At</th>
                        <th>Method</th>
                        <th>Route</th>
                        <th>Status Code </th>
                        <th>Response Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tag </td>
                        <td>User Name</td>
                        <td>Created At</td>
                        <td>Metdod</td>
                        <td>Route</td>
                        <td>Status Code </td>
                        <td>Response </td>
                    </tr>
                    <tr>
                        <td>Tag </td>
                        <td>User Name</td>
                        <td>Created At</td>
                        <td>Metdod</td>
                        <td>Route</td>
                        <td>Status Code </td>
                        <td>Response </td>
                    </tr>
                    <tr>
                        <td>Tag </td>
                        <td>User Name</td>
                        <td>Created At</td>
                        <td>Metdod</td>
                        <td>Route</td>
                        <td>Status Code </td>
                        <td>Response </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Admin;
