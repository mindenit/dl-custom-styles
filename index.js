const fs = require('fs-extra');
const sass = require('sass');
const path = require('path');

const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Будь ласка, вкажіть шлях до SCSS файлу');
  console.log('Використання: npm run convert [шлях_до_файлу.scss]');
  process.exit(1);
}

if (!inputFile.endsWith('.scss')) {
  console.error('Файл повинен мати розширення .scss');
  process.exit(1);
}

const distDir = 'dist';
const outputFile = path.join(distDir, path.basename(inputFile).replace('.scss', '.css'));

try {
  if (!fs.existsSync(inputFile)) {
    console.error(`Файл ${inputFile} не знайдено`);
    process.exit(1);
  }
  if (!fs.existsSync(distDir)) {
    console.log(`Створення директорії ${distDir}/`);
    fs.mkdirSync(distDir);
  }
  if (fs.existsSync(outputFile)) {
    console.log(`Видалення існуючого файлу ${outputFile}`);
    fs.unlinkSync(outputFile);
  }
  const result = sass.compile(inputFile);
  fs.writeFileSync(outputFile, result.css);

  console.log(`Успішно сконвертовано ${inputFile} в ${outputFile}`);
} catch (error) {
  console.error('Помилка при конвертації:', error.message);
  process.exit(1);
}