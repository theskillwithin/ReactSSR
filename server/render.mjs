import React from 'react'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import Page from '../app/index.js'

function render(req, res) {
    const content = ReactDOMServer.renderToString(React.createElement(Page));
    const store = { data: 'test' }
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello SSR</title>
    <link rel="stylesheet" href="/styles/home.bundle.css" type="text/css" media="all" />
</head>
<body>
    <div id="root">${content}</div>
    <script type="text/javascript" src="/js/home.bundle.js"></script>
    <script>reactClientRender(${store})}</script>
</body>
</html>`;

    res.status(200).send(html);
};

export default render
