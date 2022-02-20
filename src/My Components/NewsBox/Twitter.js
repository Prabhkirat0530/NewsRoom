import React from 'react';
import { Timeline } from 'react-twitter-widgets';

export default function Twitter() {
    return (
        <div className='TwitterBg py-5'>
            <div className=" container">
                <h1 className='display-3 text-center pt-5'>Twitter<br />
                    <a className="twitter-follow-button"
                        target="_blank"
                        href="https://twitter.com/PrabhkiratSin17"
                        data-size="large"
                        data-show-count="false"
                        data-show-screen-name="false">
                        Follow @PrabhkiratSin17
                    </a>
                </h1>
                <div className='row row-cols-1 row-cols-md-3 g-4 my-2'>
                    <div className='rounded col text-center'>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "AajTak" }}
                            options={{ width: "100%", height: "500" }}
                        />
                    </div>
                    <div className='rounded col text-center'>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "Ani" }}
                            options={{ width: "100%", height: "500" }}
                        />
                    </div>
                    <div className='rounded col text-center'>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "CNBC" }}
                            options={{ width: "100%", height: "500" }}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}