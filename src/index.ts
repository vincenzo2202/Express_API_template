import express from "express";

const app = express();


//  creación de los endpoints
app.get("/users", (req, res) => {
    res.send("GET USER")
});

app.put("/users", (req, res) => {
    res.send("UPDATE USER")
});

app.post("/users", (req, res) => {
    res.send("CREATE USER")
});

app.delete("/users", (req, res) => {
    res.send("DELETE USER")
});


// creacion de endpoints dinámicos 

app.get("/favorites/:id", (req, res) => {
    const favoritesId = req.params.id
    console.log(favoritesId);
    return res.send("GET FAVORITES " + favoritesId)
});

app.put("/favorites/:id", (req, res) => {
    const favoritesId = req.params.id
    console.log(favoritesId);
    return res.send("UPDATE FAVORITES " + favoritesId)
});

app.post("/favorites/:id", (req, res) => {
    const favoritesId = req.params.id
    console.log(favoritesId);
    return res.send("CREATE FAVORITES " + favoritesId)
});

app.delete("/favorites/:id", (req, res) => {
    const favoritesId = req.params.id
    console.log(favoritesId);
    return res.send("DELETE FAVORITES " + favoritesId)
});


// encendido del servidor, puerto 4000

app.listen(4000, () => {
    console.log("Server Running");
})