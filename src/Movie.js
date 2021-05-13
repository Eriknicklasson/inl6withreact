import React from "react"

export default function Movie(props) {

    function getStars(rating) {
        const stars = [];
        for (var i = 0; i < rating; i++) {
            stars.push(<img src="images/star.png" alt="Star" />);
        }

        return stars;
    }

    return (
        <div>
            <li className="list-group-item">
                {props.item.title}
                {getStars(props.item.grade)}


                <button className="btn btn-sm btn-danger float-end" onClick={() => { props.deleteItem(props.item.id) }}>X</button>

            </li>

        </div >
    )
}