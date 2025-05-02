export class ProductsEntity {

    products  = [
        {id: 1, name: "Zapatos", cantidad: 30},
        {id: 2, name: "Camisas", cantidad: 80},
        {id: 3, name: "sudaderas", cantidad: 13},
    ];



    findOne(id) {
        return this.products.find((product) => product.id == id);
    }

    findAll() {
        return this.products;  
    }

    
    create(product) {
        if (!product.id) {
            const newId = this.findAll().length + 1;
            product.id = newId;
        }
        this.products.push(product);
        return this.findOne(product.id);
    }

    update(id, product) {
        const productDb = this.findOne(id);

        this.products = this.products.filter((u) => u.id !== id);

        const updatedProduct = {
            ...productDb,
            ...product,
        };
        return this.create(updatedProduct);
    }

    delete(id) {
        this.products = this.products.filter((u) => u.id !== id);
        return "User Deleted";
    }


}