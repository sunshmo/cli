import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ejs from 'ejs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templateRootPath = join(__dirname, '..', 'components'); // 模板目录

async function copyDirectory(source, destination, componentName) {
  try {
    if (!fs.existsSync(source)) {
      console.log(chalk.red(`❌ 模板目录不存在: ${source}`));
      process.exit(1);
    }

    // 替换组件内容并创建文件
    fs.readdirSync(source).forEach((dir) => {
      const sourceFile = join(source, dir);
      const destFile = join(destination, dir);
      if (fs.statSync(sourceFile).isFile()) {
        const fileContent = fs.readFileSync(sourceFile, 'utf-8');
        const renderedContent = ejs.render(fileContent, { componentName });
        fs.writeFileSync(destFile.replace('.ejs', ''), renderedContent);
      }
    });

    console.log(chalk.green(`✅ 复制完成：${destination}`));
  } catch (error) {
    console.error(chalk.red('❌ 复制文件时出错：'), error);
    process.exit(1);
  }
}

export async function createComponent(componentName) {
  const templates = fs
    .readdirSync(templateRootPath)
    .filter((dir) => fs.statSync(join(templateRootPath, dir)).isDirectory());

  if (templates.length === 0) {
    console.log(chalk.red('❌ 没有可用的模板'));
    process.exit(1);
  }

  // 选择模板
  const { templateName } = await inquirer.prompt([
    {
      type: 'list',
      name: 'templateName',
      message: '请选择模板:',
      choices: templates,
    },
  ]);

  const componentPath = join(process.cwd(), componentName);
  const templatePath = join(templateRootPath, templateName);

  if (fs.existsSync(componentPath)) {
    console.log(chalk.red('❌ 目标目录已存在！'));
    process.exit(1);
  }

  console.log(
    chalk.green(`✨ 创建组件：${componentName} (模板: ${templateName})`),
  );

  fs.mkdirSync(componentPath, { recursive: true });
  await copyDirectory(templatePath, componentPath, componentName);

  console.log(chalk.green('✅ 组件创建成功！'));
}
