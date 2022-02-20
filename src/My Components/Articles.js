import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsBlock from './NewsBlock';


export default function Articles() {
    // Api
    const [data, setData] = useState([]);
    const getNews = () => {
        axios.get("https://newsapi.org/v2/everything?q=India&sortBy=publishedAt&apiKey=cde0d9c6857249dc9700ca46ec1a069e")
            .then((response) => {
                setData(response.data.articles)
                console.log(response)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getNews();
        setInterval(getNews, 1000 * 60 * 60)
    });

    return (
        <div className='mt-5'>
            <br>
            </br>

            {
                data.map((value) => {
                    return (
                        <>
                            <div className="container w-100 row-col-2" key={value.url}>
                                <NewsBlock url={value.urlToImage}
                                    heading={value.title}
                                    description={value.description}
                                    publishedAt={value.publishedAt}
                                    author={value.author}
                                    newsUrl={value.url}
                                />
                            </div>
                        </>
                    );
                })
            }


        </div>
    );
}
