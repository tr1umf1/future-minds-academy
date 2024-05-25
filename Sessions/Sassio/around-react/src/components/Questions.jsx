import React from "react";

export default function Questions() {
    return (
        <div>
            <div className="row faq-section m-10 gap-9">
                <div className="col-1">
                    <button className="speciale-1">GET HELP (HELP CENTER)</button>
                    <h2 className="faq">Frequently asked questions.</h2>
                </div>
                <div className="col-1">
                    <div className="faq-item">
                        <span className="material-symbols-outlined">remove</span>
                        <span className="dark">What does the package include?</span>
                    </div>
                    <div className="faq-item-content">
                        <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for
                            styling, complete JS files with comments, all HTML variations. Besides, we include all mobile
                            PSD mockups.
                        </p>
                    </div>
                    <div className="faq-item">
                        <span className="material-symbols-outlined">add</span>
                        <span className="dark">How does the 14-day trial work?</span>
                    </div>
                    <div className="faq-item">
                        <span className="material-symbols-outlined">add</span>
                        <span className="dark">How do I pay for your service?</span>
                    </div>
                    <div className="faq-item">
                        <span className="material-symbols-outlined">add</span>
                        <span className="dark">Can I suggest a new feature?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
