import React from "react";


export default function FullImageNews(props) {
    return (
        <div className="card bg-dark text-white">
            <a href={props.newsUrl} target="_blank">
                <img src={props.url} className="card-img opacity-25" alt='...' />
                <div className="card-img-overlay text-decoration-none text-light">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text text-muted">{props.description.slice(0, 80)}...</p>
                </div>
            </a>
        </div>
    );
}
