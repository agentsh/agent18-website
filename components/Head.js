import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default class Header extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
    };

    render() {
        return (
            <Head>
                <title>Agent the first alpine conference software engineering</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="index,follow,noodp" />

                <meta name="title" content="Agent the first alpine conference software engineering" />
                <meta
                    name="description"
                    content="Experts and core contributers come to showcase their work in ReactJS,
              ReactNative, Node and more. Learn, talk and go skiing" />
                <meta name="keywords" content="" />
                <meta name="robots" content="INDEX, FOLLOW" />

                <meta property="language" content="en_US" />
                <meta property="publisher" content="agent.sh" />
                <meta property="author" content="agent.sh" />
                <meta property="copyright" content="agent.sh" />
                <meta property="audience" content="all" />
                <meta property="distribution" content="global" />
                <meta property="image" content="" />
                <meta property="format-detection" content="telephone=yes" />

                <meta property="og:title" content="Agent the first alpine conference software engineering" />
                <meta
                    property="og:description"
                    content="Experts and core contributers come to showcase their
              work in ReactJS, ReactNative, Node and more. Learn, talk and go skiing" />
                <meta property="og:url" content="http://www.agent.sh" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="http://www.agent.sh/static/img/agent_sh_og.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Agent.sh" />

                <meta property="DC.Title" content="Agent the first alpine conference software engineering" />
                <meta property="DC.Publisher" content="agent.sh" />
                <meta property="DC.Copyright" content="agent.sh" />

                <meta property="twitter:card" content="summary" />
                <meta property="twitter:url" content="http://www.agent.sh" />
                <meta property="twitter:title" content="Agent the first alpine conference software engineering" />
                <meta
                    property="twitter:description"
                    content="Experts and core contributers come to showcase their work
              in ReactJS, ReactNative, Node and more. Learn, talk and go skiing" />
                <meta property="twitter:image" content="http://www.agent.sh/static/img/agent_sh_og.jpg" />
                <meta property="twitter:image:" content="agent.sh Javascript conference" />

                <link rel="apple-touch-icon" sizes="57x57" href="static/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="static/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="static/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="static/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="static/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="static/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="static/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="static/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="static/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="static/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="static/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png" />
                <link rel="manifest" href="static/favicon/manifest.json" />
                <meta name="msapplication-TileImage" content="static/favicon/ms-icon-144x144.png" />

                <script src="static/js/tracking.header.js" />
            </Head>
        );
    }
}
