import React from "react";
import DataArea from "../DataArea/index.js";
//since DataArea is wrapping databody and datatable we can just import 1
// import DataBody from "../DataBody/index.js";
// import DataTable from "../DataTable/index.js";


function Main (){
    return (
        <>
        <DataArea />
        </>
    );
};

export default Main;