
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test" , (req , rest ) => {
    rest.json({
        message :"backend on"
    });
});

app.post("/api/delivery" , (req , res)=>{
    const {
        deliveryType,
        transportType,
        timeType,
        fragile,
        insured

    } = req.body;

    if (!deliveryType || !transportType || !timeType) {
    return res.status(400).json({
        success: false,
        error: "Faltan datos obligatorios"
    });
}
})

app.listen(3000 , ()=>{
    console.log("servidor en http://localhost:3000");
});