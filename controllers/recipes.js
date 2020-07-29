const fs = require('fs') 
const data = require('../data.json')

//index
exports.index = function(req, res){

    return res.render('admin/recipes/page-home')

}

//create
exports.create = function(req, res){

    return res.render('admin/recipes/create')

}

//show
exports.show = function(req, res){

    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe){

        return recipe.id == id

    })

    if(!foundRecipe){

        return res.send("Receita não encontrada")

    }

    const recipe = {

        ...foundRecipe,

    }

    return res.render('admin/recipes/show', { recipe })

}

//edit
exports.edit = function(req, res){

    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){

        return recipe.id == id

    })
   
    if(!foundRecipe){

        return res.send("Receita não encontrada")

    }

    const recipe = {

        ...foundRecipe,

    }

    return res.render('admin/recipes/edit', { recipe })

}

//post
exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for(key of keys){

        if(req.body.information == ""){

            req.body.information == "x"

        }
        if(req.body[key] == ""){

            return res.send('Preencha todo os campos por favor')

        }
        
    
    }

    let {image, name, author, ingredients, preparation, information } = req.body

    //Alterações necessárias
    let id = 1
    const lastRecipe = data.recipes[data.recipes.length-1]

    if(lastRecipe){

        id = lastRecipe.id + 1

    }

    data.recipes.push({

        id,
        image,
        name,
        author,
        ingredients,
        preparation,
        information

    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

        if(err){

            res.send('Write Error')

        }

        return res.render('admin/recipes')
    
    })


}


//put
exports.put = function(req, res){

    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {

        if(id == recipe.id){

            index = foundIndex
            return true

        }

    })

    if (!foundRecipe) {

        return res.send("Recipe not found")

    }

    const recipe = {

        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)

    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

        if(err){

            return res.send("Write error")

        }

        return res.redirect(`/admin/recipes/${id}`)

    })

}

//delete
exports.delete = function(req, res){

    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function(recipe){

        return recipe.id != id

    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

        if(err){

            return res.send("Write file ERROR!")

        }

        return res.redirect("/admin/recipes")

    })

}