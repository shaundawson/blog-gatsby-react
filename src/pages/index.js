import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'

const IndexPage = (props) => {
  return (
    <Layout>
    <section class="hero is-black is-bold">
    <div class="hero-body">
        <div class="container has-text is-fullhd">
            <div class="columns ">
                <div class="column is-4">
                <h1 class="title is-5">
                where we navigate<br></br>
                what #allblacklivesmatter means<br></br>
                in a world where they don't <br></br>
            </h1>
            <hr></hr>
            <br></br>
          </div>
                <div class="column is-7 is-offset-1">
                <a class="button is-danger">Season 1</a>
                <br></br>
                <br></br>
                    <h2 class="subtitle is-5">
                        Episode 001: Blackademia
                    </h2>
                    <p>
                    <b>71 min / 20 December, 2018. </b>
                    Since the days of slavery, constraining black education was used as a method to 
                    quell black agency and fears of slave rebellions. This denial only intensified Black 
                    people's desire for education... 
                    </p>
                    <br></br>
                    <iframe src="https://open.spotify.com/embed/show/5xBPxVpKQxE1Ut5TkEWLjH" width="auto" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-foot">
            <div>
            </div>

    </div>
</section>


    </Layout>
  )
}

export default IndexPage;
