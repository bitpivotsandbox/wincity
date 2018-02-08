import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>DevBadges - Home</title>
      </Helmet>
      <h2>Home</h2>
      <p>This has been deployed via CI</p>
      <Link to="/welcome">Welcome</Link>
    </div>
  );
}
