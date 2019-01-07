import React from 'react'
import twitterIcon from '../images/twitter.png'
import fbIcon from '../images/facebook.png'
import './share.css'

const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @blackfriendsdin`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}`;

    return (
        <div>
            <center>
            <p class="title is-6">Share this episode.</p>
            </center>
            <ul className="social">
                <li>
                    <a href={fb} target="blank">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href={twitter} target="blank">
                    <i class="fab fa-twitter" aria-hidden="true"></i>

                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share;