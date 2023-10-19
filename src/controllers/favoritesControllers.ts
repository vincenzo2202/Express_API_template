import { Request, Response } from "express";
 
const getFavorites =  (req:Request, res:Response) => {
    const favoritesId = req.params.id
    const favoritesBodyId = req.body
    console.log(`GET FAVORITES with the name: ${favoritesId} and with this atributes: ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
    res.send(`GET FAVORITES with the name: ${favoritesId} and with this atributes: ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
} 
const createFavorites =  (req:Request, res:Response)=> {
    const favoritesId = req.params.id
    const favoritesBodyId = req.body
    console.log(`CREATE FAVORITES with the name: ${favoritesId} and with this atributes: ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
    res.send(`CREATE FAVORITES with the name: ${favoritesId} and with this atributes:  ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
}
const updateFavorites =(req:Request, res:Response) => {
    const favoritesId = req.params.id
    const favoritesBodyId = req.body
    console.log(`UPDATE FAVORITES with the name: ${favoritesId} and with this atributes:  ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
    res.send(`UPDATE FAVORITES with the name: ${favoritesId} and with this atributes:  ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
}
const deleteFavorites =(req:Request, res:Response) => {
    const favoritesId = req.params.id
    const favoritesBodyId = req.body
    console.log(`DELETE FAVORITES with the name: ${favoritesId} and with this atributes:  ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
    res.send(`DELETE FAVORITES with the name: ${favoritesId} and with this atributes: ${favoritesBodyId.name} and ${favoritesBodyId.favorites}`)
} 

export {getFavorites,createFavorites,updateFavorites, deleteFavorites} ;

