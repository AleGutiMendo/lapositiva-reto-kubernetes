const express = require('express');

const app = express();

app.get('/products', (req, res) => {
    const products = [
        { productId: 1, title: 'Title 01' },
        { productId: 2, title: 'Title 02' }
    ];
    res.json(products);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT}`);
});
