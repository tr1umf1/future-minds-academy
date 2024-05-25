import React from "react";

export default function Info(props) {
    return(
        <div>
        <div class={props.class}>
            <div class="col components">
                <h1>773</h1>
                <p>Components</p>
            </div>
            <div class="col downloads">
                <h1>1254</h1>
                <p>Downloads</p>
            </div>
            <div class="col followers">
                <h1>14941</h1>
                <p>Followers</p>
            </div>
            <div class="col users">
                <h1>1254</h1>
                <p>New User</p>
            </div>
        </div>
        </div>
    )
}