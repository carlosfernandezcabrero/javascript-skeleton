import { writeFileSync } from "fs";
import { createInterface } from "readline";
import data from "./package.json";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

(() => {
    rl.question("Project name: ", (project_name) => {
        rl.question("Project description (short): ", (project_description) => {
            data.name = project_name.trim();
            data.description = project_description.trim();

            writeFileSync(
                "./package.json",
                `${JSON.stringify(data, null, 4)}\n`
            );

            rl.close();
        });
    });
})();

rl.on("close", () => {
    process.exit(0);
});
