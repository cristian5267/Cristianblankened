import { Router } from "express";
import { ProductsEntity } from "../entity/products.entity.js";

const router = Router ();
const productsEntity = new ProductsEntity();

router.get("/" , (req, res) => {
    
    const products = productsEntity.findAll()
    
    res.json({
        data: products,
    });
});


router.get("/:id" , (req, res) => {
    
    const id  = req.params.id;
    const product = productsEntity.findOne(+id);
    

    return res.json({
        data: product,
    });

});

router.post("/" , (req, res) => {
    
    const productCreate = req.body;

    const createdProduct = productsEntity.create(productCreate);

    return res.json({
        data: createdProduct, 
    });

});


router.patch("/:id" , (req, res) => {
    const { id } = req.params; 
    const productUpdate = req.body;

    const updatedProduct = productsEntity.update(+id, productUpdate);

    return res.json({
        data: updatedProduct, 
    });

});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.json({
        data: productsEntity.delete(+id),
    });
});

export default router; 