export const productsList = [{
        id: "001",
        category: "Corpiño",
        name: "Summer 1",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 800,
        stock: 7,
        img: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/A/N/ANNA-5331GA_0.jpg"
    },
    {
        id: "002",
        category: "Corpiño",
        name: "Summer 2",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 849,
        stock: 7,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/138/675/products/90141-26424ceb5436bc4ac616289785737595-1024-1024.jpg"
    },
    {
        id: "003",
        category: "Corpiño",
        name: "Summer 3",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 870,
        stock: 7,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/138/675/products/31-ae6715ba448ea2f5b316301028708272-1024-1024.png"
    },
    {
        id: "004",
        category: "Corpiño",
        name: "Summer 4",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 900,
        stock: 7,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/138/675/products/90051-aaff3280bdc84a968116301881739855-1024-1024.png"
    },
    {
        id: "005",
        category: "Corpiño",
        name: "Summer 5",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 910,
        stock: 7,
        img: "https://www.lenceriamoda.com/images/products_gallery/5e828828af72f533298134.jpg"
    },
    {
        id: "006",
        category: "Bombacha",
        name: "Spring 1",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 400,
        stock: 5,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/138/675/products/111-7a9f7cf8e5fd4cf07916350915961865-1024-1024.png"
    },
    {
        id: "007",
        category: "Bombacha",
        name: "Spring 2",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 410,
        stock: 5,
        img: "https://static.dafiti.com.ar/p/reef-9691-135391-1-product.jpg"
    },
    {
        id: "008",
        category: "Bombacha",
        name: "Spring 3",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 449,
        stock: 5,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/009/339/products/06918-cbl1-fddc2d7abe6e7956e215877077584639-1024-1024.png"
    },
    {
        id: "009",
        category: "Bombacha",
        name: "Spring 4",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 460,
        stock: 5,
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/295/625/products/lulu-blanco1-f05f64810452cf86a216321659566447-640-0.jpg"
    },
    {
        id: "010",
        category: "Bombacha",
        name: "Spring 5",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem dolor debitis beatae, ipsa earum.",
        price: 470,
        stock: 5,
        img: "https://static.dafiti.com.ar/p/mora-6940-284981-1-product.jpg"
    }
]


export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productsList.find(product => product.id === id) : productsList
            resolve(query)
        }, 2000)
    })
}