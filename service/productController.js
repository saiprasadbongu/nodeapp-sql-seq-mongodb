const db = require('../models/seq.js')
const userModel = require('../models/userModel.js')

// create  Model
const Product = db.products
const Review = db.reviews
const User = db.users
const Contact=db.contacts


// create 

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}

// get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

//  get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}

//  update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}

//  delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}

//  get published product

const getPublishedProduct = async (req, res) => {

    const products =  await Product.findAll({ where: { published: true }})

    res.status(200).send(products)

}


//add user
const addUser = async (req, res) => {

    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName  
    }
     const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}


// add contact 
const addContact = async (req, res) => {
  const id = req.params.id
 let data = {
        permanantAddress: req.body.permanantAddress,
        currentAddress: req.body.currentAddress,
        user_id: id,
    }

    const contact = await Contact.create(data)
    res.status(200).send(contact)

}

//1 to 1 relation

const oneToOne = async(req,res)=>{

    const data =await User.findAll({
        attributes:['firstName','lastName'],
        include:[{
            model:Contact,
            as:'contactDetails',
            attributes:['permanantAddress','currentAddress'],
            where:{id:id} }
        ]
         })
    res.status(200).send(data)
}


//  connect one to many relation Product and Reviews

const getProductReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)
}

module.exports = { addProduct,  getAllProducts, getOneProduct, updateProduct, deleteProduct, getPublishedProduct, getProductReviews,oneToOne,addUser,addContact}











