import express from 'express';
import memberRoutes from './membership/routers/MembersRoutes.js';
import bodyParser from 'body-parser';
import treasuryRoutes from './theTreasury/routers/treasuryRoutes.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/members/', memberRoutes);

app.use('/treasury/budget/', treasuryRoutes);

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT: ${PORT}...`)
});