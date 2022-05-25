import React, { Component, FC } from 'react';
import './SpotifyPage.css';
import SpotifyComponent from '../../components/SpotifyComponent/SpotifyComponent';

const client_id = process.env.REACT_APP_CLIENT_ID!;
const client_secret = process.env.REACT_APP_CLIENT_SECRET!;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN!;

const SpotifyPage = () => {
    return (
        <div id="pageBox">
            <div id="leftBox"></div>
            <SpotifyComponent client_secret={client_secret} client_id={client_id} refresh_token={refresh_token} />
            <div id="rightBox"></div>
        </div>
    );
}

export default SpotifyPage;
