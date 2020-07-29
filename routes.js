const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const receitas = require('./data')

routes.get("/", function(req, res){

    return res.render("page-home", { receitas })

})

routes.get("/receitas", function(req, res){

    return res.render("receitas", { receitas })

})

routes.get("/receitas/:index", function(req, res) {
    
    const recipeIndex = req.params.index;

    const rec = receitas.find(function(rec){

        return rec.id == recipeIndex

    })
  
    if(!rec){

        return res.send("NOT FOUND")

    }

    return res.render("receita", { receita: receitas[recipeIndex]});
  
});

routes.get("/sobre", function(req, res){

    const about = {

        text1: `Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis 
        erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed 
        eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, 
        vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, 
        aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. 
        In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum 
        metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.
        <br>
        Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar 
        mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur 
        porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt 
        arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl 
        at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. 
        Nunc ut nulla faucibus enim ultricies euismod.`,
        text2: ` Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis 
        erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed 
        eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, 
        vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, 
        aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim 
        nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus 
        ligula ex, semper vitae eros ut, euismod convallis augue.
        <br>
        Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis 
        ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. 
        Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere 
        ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec 
        libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus 
        enim ultricies euismod.`,
        text3:`Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis 
        ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor 
        nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et 
        posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. 
        Donec libero neque, vulputate semper orci et, malesuada sodales eros. 
        Nunc ut nulla faucibus enim ultricies euismod.`


    }

    return res.render("sobre", { about })

})

//Admin Foodfy

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)
routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)


module.exports = routes