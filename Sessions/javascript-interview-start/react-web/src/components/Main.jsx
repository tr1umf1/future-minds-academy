import React from 'react';

function Main() {
    return (
        <main className="col-4">
            <div className="row">
                <div className="col">
                    <div className="movie-details-page">
                        <h1>Plane (2023)</h1>
                        <h4>Date: 02-24-2023 | Length: 108min</h4>
                        <div className="container">
                            <iframe
                                className="responsive-iframe"
                                src="https://www.youtube.com/embed/M25zXBIUVr0?si=2_Np20M6IFPMasOu"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h4>Gerard Butler, Mike Colter, Tony Goldwyn, Yoson An</h4>
                        <p>On an initially routine flight, the protagonist ends up saving passengers through an emergency landing following a lightning strike.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
