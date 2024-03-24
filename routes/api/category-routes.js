const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    console.log("================/API/CATEGORIES GET ROUTE =====================")
    
      // find all categories
      // be sure to include its associated Products: done with
    const categoryData = await Category.findAll({model: Product})
     console.log(categoryData)
     res.json(categoryData)
  } catch (error) {
    console.log("error");
    console.log("error in geting all categories: ", error)
    
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value (its primary key-find by primary key method)
  // be sure to include its associated Products: done with {include: Product}
  try {
    console.log("====API/:id GET ROUTE=====")
    const categoryIdData = await Category.findByPk(req.params.id, {include: Product})
    res.json(categoryIdData)
  } catch (error) {
    console.log("error in getting category by id", error)
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try {
   console.log("====API/categories POST ROUTE=====")
  const newCategory = await Category.create({category_name:req.body.category_name});
  res.json(newCategory);
  } catch (error) {
    console.log("error in creating new category", error)
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
