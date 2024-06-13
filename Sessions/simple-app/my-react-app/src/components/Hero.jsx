import React from "react";

export default function Hero(props) {
    return(
        <div>
            <main class="row">
            <div class="col">
                <h1 class="text-center">{props.caption}</h1>
                <div>
                    <img class="img-xxl" src={props.image} alt="Spring" />
                </div>
            </div>
        </main>
        </div>
    )
}