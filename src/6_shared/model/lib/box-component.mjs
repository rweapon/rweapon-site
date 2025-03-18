import fs from "fs";
import path from "path";

const componentName = process.argv[2];

if (!componentName) {
  console.log("Пожалуйста, укажите название компонента с большой буквы.");
  process.exit(1);
}

const componentNameLowerCase = componentName.toLowerCase();

const sourceDir = path.join("src", "6_shared", "ui");

const targetDir = path.join(sourceDir, componentName);

if (!fs.existsSync(sourceDir)) {
  console.log(`Папка ${sourceDir} не существует.`);
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs
  .readdirSync(sourceDir)
  .filter((file) => file.startsWith(componentNameLowerCase));

if (files.length === 0) {
  console.log(
    `Не найдено файлов для компонента с названием ${componentNameLowerCase}.`
  );
  process.exit(1);
}

files.forEach((file) => { 
  const oldPath = path.join(sourceDir, file);
  const newFileName = file.replace(componentNameLowerCase, componentName);
  const newPath = path.join(targetDir, newFileName);

  fs.renameSync(oldPath, newPath);
});

console.log(`Компонент ${componentName} успешно переименован и перемещён.`);
