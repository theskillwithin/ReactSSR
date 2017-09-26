const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const App            = require('../dist/js/home.bundle.js');

function render(req, res) {
    const content = ReactDOMServer.renderToString(React.createElement(App));
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello SSR</title>
    <link rel="stylesheet" href="/dist/styles/home.bundle.css" type="text/css" media="all" />
</head>
<body>
    <header>
        ${content}
    </header>
    <div id="app"></div>
    <script type="text/javascript" src="/dist/js/home.bundle.js"></script>
</body>
</html>`;

    res.status(200).send(html);
};

module.exports = render;
