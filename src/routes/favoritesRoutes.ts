import { Router } from "express";
import { getFavorites,createFavorites,updateFavorites, deleteFavorites } from "../controllers/favoritesControllers";

const usersRouterFav = Router();

usersRouterFav.get("/favorites/:id",getFavorites);
usersRouterFav.put("/favorites/:id",createFavorites);
usersRouterFav.post("/favorites/:id",updateFavorites);
usersRouterFav.delete("/favorites/:id",deleteFavorites);



export {usersRouterFav}