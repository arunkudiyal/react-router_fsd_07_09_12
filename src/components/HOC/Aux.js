import React from "react";

const Aux = (props) => {
    console.log(props.children)
    return <div id='hoc-container'>{props.children}</div>
}
export default Aux;