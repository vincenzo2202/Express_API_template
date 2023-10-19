import express from "express";
import { usersRouter } from "./routes/usersRoutes";
import { usersRouterFav } from "./routes/favoritesRoutes";

const app = express();
const PORT = process.env.PORT || 4000 

// Este es el middleware 
app.use(express.json());


app.use("/", usersRouter);
app.use("/", usersRouterFav);

// encendido del servidor, puerto 4000
app.listen( PORT, () => {
    console.log(`Server Running ${PORT}`);
})