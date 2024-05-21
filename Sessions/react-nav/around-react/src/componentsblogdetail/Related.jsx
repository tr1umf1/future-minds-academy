import React from "react";

export default function Related() {
    return (
        <div>
            <div class="container-fixed container-res">
        <div class="row-direction">
            <div class="col">
                <div class="blog-articles-header">
                    <div>
                        <h1 class="section-title">Related articles</h1>
                    </div>
                    <div class="button-container gap-1">
                        <button class="round-button">&leftarrow;</button>
                        <button class="round-button">&rightarrow;</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="blog-articles-container gap-3">
                    <div class="blog-articles-image">
                        <img src="assets/images/blog-detail-article.png" alt="" />
                        <p>The fashion for eco bags with vintage prints will still be relevant for more than one year
                        </p>
                    </div>
                    <div class="blog-articles-image">
                        <img src="assets/images/blog-detail-article-1.png" alt="" />
                        <p>How to look for inspiration for new goals in life and remember to give yourself a break?</p>
                    </div>
                    <div class="blog-articles-image">
                        <img src="assets/images/blog-detail-article-3.png" alt="" />
                        <p>A session with a psychologist as a personal choice or a fashion trend in society</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fixed container-res">
        <div class="row">
            <div class="col">
                <div class="subscription-container">
                    <h1>Stay up to date with important news!</h1>
                    <form>
                        <div class="checkbox-column">
                            <label><input type="checkbox" /> Advertising Updates</label>
                            <label><input type="checkbox" /> Daily Newsletter</label>
                        </div>
                        <div class="checkbox-column">
                            <label><input type="checkbox" /> Week in Review</label>
                            <label><input type="checkbox" /> Psychology</label>
                        </div>
                        <div class="checkbox-column">
                            <label><input type="checkbox" /> Psychology</label>
                            <label><input type="checkbox" /> Design</label>
                        </div>
                        <div class="checkbox-column">
                            <div class="subscribe-btn">
                                <input type="text" placeholder="Your email" />
                                <button class="normal-btn btn-primary primary-color">Subscribe</button>
                            </div>
                            <span class="term-agreements">* Yes, I agree to the <span class="active-link">terms</span>
                                and <span class="active-link">privacy policy</span></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}