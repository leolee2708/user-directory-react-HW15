import React, { useContext } from "react";
import DataTable from "../DataTable";

import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataBody = () => {
    const context = useContext(DataAreaContext);

    return (

        <div className="databody mt-5">
            <table
                id="body"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <DataTable />
            </table>
        </div>
    );
}

export default DataBody;