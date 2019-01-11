class ProductController {
    async index ({request}) {
        let result = {route: 'ProductController.index'};
        
        console.log(result);
        return result;
    }

    async show ({request, params}) {
        let result = {route: 'ProductController.show', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async store ({request}) {
        let result = {route: 'ProductController.store'};
        
        console.log(result);
        return result;
    }

    async update ({request, params}) {
        let result = {route: 'ProductController.update', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async destroy ({request, params}) {
        let result = {route: 'ProductController.destroy', 
                        params: params};
        
        console.log(result);
        return result;
    }

}

module.exports = ProductController;