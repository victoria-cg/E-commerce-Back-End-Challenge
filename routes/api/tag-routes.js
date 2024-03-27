const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log("================/API/TAGS GET ROUTE =====================")
  try {
    //finding all tags and including associated product data
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: ProductTag,
        },
      ],
    });
    res.json(tagData)
  } catch (error) {
    console.log("error when getting all tags", error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log("====API/tags/:id GET ROUTE=====");
  try {
    //finding tag by primary key and including associated product data
    const tagIdData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
        {
          model: ProductTag,
        },
      ],
    });
    res.json(tagIdData)
  } catch (error) {
    console.log("error in getting tag by id", error);
  }
});
  // create a new tag
router.post('/', async (req, res) => {
  console.log("====API/tags POST ROUTE=====")
try {
  const newTag = await Tag.create({tag_name:req.body.tag_name});
  res.json(newTag);
} catch (error) {
  console.log("error in creating new tag", error)
}
});

 // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  console.log("====API/tags/:id PUT ROUTE=====")
 try {
  const updatedTag = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
    );
    //send updated tag back to client as json
    res.json(updatedTag);
 } catch (error) {
  console.log("error in updating tag", error)
 }
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  console.log("====API/tags/:id DELETE ROUTE=====")
  //delete tag by id specified in request
try {
 const deletedTag = await Tag.destroy({
  where: {
    id: req.params.id,
  },
  });
  //sends deleted tag back to client as json
  res.json(deletedTag);
  //log error if error occurs
} catch (error) {
  console.log("error in deleting tag", error)
}
});

module.exports = router;
