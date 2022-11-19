import React from "react";


function List (props) {
    return (
        <div>
            {props.itemList.map(allItem => {
                return <p>{allItem.item}</p>
            })}
        </div>
    );
}

export default List;