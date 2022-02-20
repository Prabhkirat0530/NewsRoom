import React from 'react';

export default function NewsBlock(props) {

    return (
        <>
            <div className="card m-5">
                <div className="row">
                    <a href={props.newsUrl} className="col-md-4 h-100 text-decoration-none">
                        <img src={props.url} className="img-fluid rounded-start" alt='...' />
                    </a>
                    <a href={props.newsUrl} type="_blank" className="col-md-8 text-decoration-none text-black">
                        <div className="card-body">
                            <h5 className="card-title">{props.heading}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text text-muted fs-4">{props.author}</p>
                            <p className='card-text text-primary'><small>{props.publishedAt}</small></p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
