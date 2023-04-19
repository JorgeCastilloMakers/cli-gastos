import colors from 'colors';
import emoji from 'node-emoji';
import { newSpent } from './prompts.js'
import { get, save } from "./fsMethods.js";


export async function createNewSpent() {
  console.log("Agregando nuevo gasto:".green,emoji.get(':money_with_wings:'));
  const Spent = await newSpent();

  console.log("Nuevo gasto cargado: ", Spent);

  const currentSpents = await get("spents");

    currentSpents.push(Spent);
    
    await save("spents", currentSpents);
}

export async function getAllSpents() {
  const currentSpents = await get("spents");
  console.log(currentSpents);
}

export async function findSpentByName(name){
  const spents = await get("spents");
  const foundSpent = spents.find((spent) => spent.name === name);
  return foundSpent;
};

export async function sumAllSpents()  {
  try {
    const spents = await get('spents');
    const total = spents.reduce((acc, spent) => acc + parseFloat(spent.spent_price), 0);
    console.log(`El total de los gastos es: ${total}`.green);
  } catch (error) {
    console.error('Error al obtener los gastos'.red, error);
  }
};