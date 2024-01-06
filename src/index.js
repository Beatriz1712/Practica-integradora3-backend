import 'dotenv/config'
import chalk from 'chalk';
import app from './app.js';

// Inicia la aplicación
//**** UP SERVER  */
const PORT = 8080;
app.listen(PORT, () => {
  console.log(chalk.bgYellowBright.black.bold(`SERVER UP PORT: ${PORT}`));
});

