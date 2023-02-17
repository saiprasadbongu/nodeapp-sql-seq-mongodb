// import controllers review, products
const productController = require('../service/productController.js')
const reviewController = require('../service/reviewController.js')


// router
const router = require('express').Router()

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  



// use routers
router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)


// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)


// one-to-one relation

router.post('/addUser', productController.addUser)

router.post('/addContact/:id', productController.addContact)

router.get('/oneToOne', productController.oneToOne)

// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router