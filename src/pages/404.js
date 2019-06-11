import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="Waduh"/>
            <h1>Waduh, halaman ini ga bisa ditemukan</h1>
            <Link to="/">Balik ke Home</Link>
        </Layout>
    )
}

export default NotFound