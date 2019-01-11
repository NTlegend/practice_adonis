class AttributeController {
    async index ({request}) {
        let result = {route: 'AttributeController.index'};
        
        console.log(result);
        return result;
    }

    async show ({request, params}) {
        let result = {route: 'AttributeController.show', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async store ({request}) {
        let result = {route: 'AttributeController.store'};
        
        console.log(result);
        return result;
    }

    async update ({request, params}) {
        let result = {route: 'AttributeController.update', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async destroy ({request, params}) {
        let result = {route: 'AttributeController.destroy', 
                        params: params};
        
        console.log(result);
        return result;
    }

}

module.exports = AttributeController;