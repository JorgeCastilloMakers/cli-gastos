import inquirer from "inquirer";
import colors from 'colors';
import emoji from 'node-emoji';
import { createNewSpent, getAllSpents, sumAllSpents } from './utils.js'
import {findSpentPrompt} from './prompts.js'



const main = async () => {
    console.log("================================".green);
    console.log("        CLI DE GASTOS - JC".green, emoji.get(':money_with_wings:'));
    console.log("================================".green);

    let run = true;
    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "task",
                message: "Bienvenido! Elige que tarea realizar:",
                choices: [
                    { value: 1, name: "Registrar un gasto" },
                    { value: 2, name: "Ver un gasto" },
                    { value: 3, name: "Ver todos los gastos" },
                    { value: 4, name: "Sumar gastos" },
                    { value: 99, name: "Finalizar" }]
            }
        ]);
        switch (action.task) {
            case 1:
                await createNewSpent();
                break;
            case 2:
                await findSpentPrompt();
                break;
            case 3:
                await getAllSpents();
                break;
            case 4:
                await sumAllSpents();
                break;
            case 99:
                run = false;
                break;
            default:
                run = false;
                break;
        }


    };
    console.log("===========================================".green);
    console.log("ADIOS GRACIAS POR USAR LA APP DE GASTOS".green);
    console.log("===========================================".green);
};

main()

