import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templateRootPath = join(__dirname, '..', 'projects'); // 模板目录

async function copyDirectory(source, destination) {
  try {
    if (!fs.existsSync(source)) {
      console.log(chalk.red(`❌ 模板目录不存在: ${source}`));
      process.exit(1);
    }

    // 递归复制所有文件和目录
    fs.copySync(source, destination, {
      filter: (src) => !src.endsWith('.DS_Store'), // 过滤掉不必要的文件
    });

    console.log(chalk.green(`✅ 复制完成：${destination}`));
  } catch (error) {
    console.error(chalk.red('❌ 复制文件时出错：'), error);
    process.exit(1);
  }
}

export async function createProject(projectName) {
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

  const projectPath = join(process.cwd(), projectName);
  const templatePath = join(templateRootPath, templateName);

  if (fs.existsSync(projectPath)) {
    console.log(chalk.red('❌ 目标目录已存在！'));
    process.exit(1);
  }

  console.log(
    chalk.green(`✨ 创建项目：${projectName} (模板: ${templateName})`),
  );

  fs.mkdirSync(projectPath, { recursive: true });
  await copyDirectory(templatePath, projectPath);

  console.log(chalk.green('✅ 项目创建成功！'));
}
