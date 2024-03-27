const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    console.log("================/API/CATEGORIES GET ROUTE =====================")
    
      // find all categories
      // be sure to include its associated Products: done with 'include: Product'
    const categoryData = await Category.findAll({include: Product});
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
    console.log("====API/categories/:id GET ROUTE=====")
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

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
console.log("====API/categories/:id PUT ROUTE=====")
try {
  const categoryUpdate = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  //sends updated category back to client as json
  res.json(categoryUpdate);
} catch (error) {
  console.log("error in updating category", error)
}
});

 // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
console.log("====API/categories/:id DELETE ROUTE=====")
try {
  const deletedCategory = await Category.destroy({
    where: {
        id: req.params.id,
      },
    });
    res.json(deletedCategory);
} catch (error) {
  console.log("error in deleting category", error)
}
});

module.exports = router;
