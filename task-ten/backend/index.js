import express from "express"
const app = express()

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'iPhone',
            price: 100,
            image: 'https://images.pexels.com/photos/30353223/pexels-photo-30353223/free-photo-of-sleek-apple-iphone-and-laptop-on-black-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 2,
            name: 'Android Phone',
            price: 80,
            image: 'https://images.pexels.com/photos/3659194/pexels-photo-3659194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 3,
            name: 'MacBook',
            price: 399,
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 4,
            name: 'Desktop',
            price: 89,
            image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 5,
            name: 'iPad',
            price: 70,
            image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    if(res.query.search) {
        const filterProducts = products.filter(product => product.name.includes(res.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})