import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullImageNews from './NewsBox/FullImageNews';
import Twitter from './NewsBox/Twitter';

export default function Main() {

    // Today's date function
    const dateBuilder = (e) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = e.getDate();
        let month = months[e.getMonth()];
        let year = e.getFullYear();
        return `${date} ${month} ${year}`
    }

    const weekBuilder = (e) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[e.getDay()];
        return `${day}`
    }


    // Api
    const [data, setData] = useState([]);
    const getNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?q=India&sortBy=publishedAt&apiKey=cde0d9c6857249dc9700ca46ec1a069e")
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
        <>

            <div className='background'>

                {/* Main Text */}
                <div className="container pt-5 mt-5">
                    <p className='fs-1 fs-bold mx-0'>{weekBuilder(new Date())}<br />{dateBuilder(new Date())}</p>
                </div>


                {/* Front Article */}
                <div className='row row-col-2 p-5'>
                    <img className="h-25 w-50" src="https://images.unsplash.com/photo-1616970984049-a2041b869194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='...' />

                    <div className='w-50 px-5'>
                        <h1 className='blackLive2'>Farmers Protest</h1>
                        <p className='content'>The 2020–2021 Indian farmers' protest was a protest against three farm acts that were passed by the Parliament of India in September 2020.
                            The acts, often called the Farm Bills, have been described as "anti-farmer laws" by many farmer unions, and politicians from the opposition who say it would leave farmers at the "mercy of corporates".
                            The farmers have also demanded the creation of a minimum support price (MSP) bill, to ensure that corporates cannot control the prices. The union government, however, maintains that the laws will make it effortless for farmers to sell their produce directly to big buyers, and stated that the protests are based on misinformation.
                            Related endemic legacy issues include farmer suicides and low farmer incomes. Despite India being largely self-sufficient in foodgrain production and having welfare schemes, hunger and nutrition remain serious issues, with India ranking as one of the worst countries in the world in food security parameters.
                        </p>
                        <a target="_blank" href='https://en.wikipedia.org/wiki/2020–2021_Indian_farmers%27_protest'><button type="button" className='btn btn-success'>Read More</button></a>
                    </div>
                </div>

            </div>

            {/* Video */}
            <div className='px-5 py-5 '>
                <h1 className='display-3 mt-5 text-center'>Live News</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                    <iframe className='col' width="640" height="390" src="https://www.youtube.com/embed/Cy_6-_XUW-c" title="Aaj Tak" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe className='col' width="640" height="390" src="https://www.youtube.com/embed/WB-y7_ymPJ4" title="NDTV" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>


            {/* Full Image News */}
            <div className='p-5 my-5 row row-cols-3'>
                {
                    data.slice(0, 3).map((value) => {
                        return (
                            <>
                                <div className="col p-2 my-5">
                                    <FullImageNews
                                        className='col mh-50'
                                        url={value.urlToImage}
                                        newsUrl={value.url}
                                        heading={value.title}
                                        description={value.description}
                                    />
                                </div>
                            </>
                        );
                    })
                }
            </div>


            {/* Featured Article */}
            < div className='row row-col-2 p-5' >
                <img className="h-25 w-50" src="https://images.unsplash.com/photo-1590932149208-4485c9ec5982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='...' />

                <div className='w-50 p-5'>
                    <h1 className='blackLive'>Black Live Matters</h1>
                    <p className='content'>Black Lives Matter (BLM) is a decentralized political and social movement that seeks to highlight racism, discrimination, and inequality experienced by black people.
                        When its supporters come together, they do so primarily to protest incidents of police brutality and racially motivated violence against black people.
                        The movement and its related organizations typically advocate for various policy changes considered to be related to black liberation.
                        While there are specific organizations that label themselves simply as "Black Lives Matter," such as the Black Lives Matter Global Network, the overall movement is a decentralized network of people and organizations with no formal hierarchy.
                        The slogan "Black Lives Matter" itself remains untrademarked by any group. Despite being characterized by some as a violent movement, the overwhelming majority of its public demonstrations have been peaceful.</p>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Black_Lives_Matter'><button type="button" className='btn btn-secondary'>Read More</button></a>
                </div>
            </div>

            {/* Twitter */}
            <Twitter />

        </>
    );
}
