import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from '../components/head';

const AboutPage = () => {
    return (
        <div>
            <Head title="About"/>
            <Layout>
                <h1>About</h1>
                <p>Just an Indonesian student.</p>
                <p>Want to contact me? <Link to='/contact'>Click here.</Link></p>
            </Layout>
        </div>
    )
} 

export default AboutPage