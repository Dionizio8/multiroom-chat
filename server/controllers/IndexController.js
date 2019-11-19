const IndexController = {
    getIndex(request, response, next){
        response.render("index",{validacao:{}});
    }
}

module.exports = IndexController;