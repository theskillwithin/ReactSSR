import React from 'react'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import Index from '../dist/js/home.bundle.js'

function render(req, res) {
    const content = ReactDOMServer.renderToString(React.createElement(Index));
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello SSR</title>
    <link rel="stylesheet" href="/styles/home.bundle.css" type="text/css" media="all" />
</head>
<body>
    <header>
        ${content}
    </header>
    <div id="app"></div>
    <script type="text/javascript" src="/js/home.bundle.js"></script>
</body>
</html>`;

    res.status(200).send(html);
};

export default render
