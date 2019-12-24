const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/:layer/:z/:x/:y.png', function (req, res) {
    const o = {
        x: parseInt(req.params.x),
        y: parseInt(req.params.y),
        z: parseInt(req.params.z),
        layer: req.params.layer
    };
    let url = o.layer + '/' + o.z + '/' + o.x + '/' + o.y + '.png';
    res.sendFile(url, { root: __dirname }, (err) => {
        if (err) {
            res.sendFile('./public/images/nomap.png', { root: __dirname });
        }
    });
});
app.use((req, res, next) => {
    res.sendFile('./public/images/nomap.png', { root: __dirname });
});
app.listen(port, () => console.log(`listening on port ${port}!`));