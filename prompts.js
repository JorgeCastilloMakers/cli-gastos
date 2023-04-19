import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";
import colors from 'colors';
import emoji from 'node-emoji';
import { findSpentByName } from "./utils.js";
import {get} from './fsMethods.js'

inquirer.registerPrompt("date", DatePrompt);

export async function newSpent() {
  return await inquirer.prompt(spent);
}

const spent = [
    {
        type: "input",
        name: "spent_name",
        message: "Indique el nombre del gasto que desea agregar: " + emoji.get(':eyes:'),
    },
    {
        type: "input",
        name: "spent_price",
        message: "Indique el valor del gasto: " + emoji.get(':heavy_dollar_sign:'),
    },
    {
        type: "date",
        name: "fecha",
        message: "Indique la fecha en la que realizo el gasto "+ emoji.get(':calendar:'),
        locale: "en-US",
        format: {month: "short", hour: undefined, minute: undefined},
    }
]


export async function findSpentPrompt(){
  console.log("Ingrese el nombre del gasto a buscar:".green);
  const answers = await inquirer.prompt({
    type: "input",
    name: "spentName",
    message: "Nombre del gasto:",
  });

  const spents = await get("spents");
  const foundSpent = spents.find((spent) => spent.spent_name === answers.spentName);

  if (foundSpent) {
    console.log("Gasto encontrado:", foundSpent);
  } else {
    console.log("No se encontró el gasto con ese nombre.".red);
  }
};