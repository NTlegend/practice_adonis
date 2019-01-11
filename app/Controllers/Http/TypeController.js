class TypeController {
    async index ({request}) {
        let result = {route: 'TypeController.index'};
        
        console.log(result);
        return result;
    }

    async show ({request, params}) {
        let result = {route: 'TypeController.show', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async store ({request}) {
        let result = {route: 'TypeController.store'};
        
        console.log(result);
        return result;
    }

    async update ({request, params}) {
        let result = {route: 'TypeController.update', 
                        params: params};
        
        console.log(result);
        return result;
    }

    async destroy ({request, params}) {
        let result = {route: 'TypeController.destroy', 
                        params: params};
        
        console.log(result);
        return result;
    }

}

module.exports = TypeController;