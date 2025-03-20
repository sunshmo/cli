#!/usr/bin/env node

import { Command } from 'commander';
import { createProject } from './scripts/create-project.js';
import { createComponent } from './scripts/create-component.js';

const program = new Command();

// CLI 命令
program
  .command('create <project-name>')
  .description('创建一个新项目')
  .action(createProject);

program
  .command('component <project-name>')
  .description('创建一个组件')
  .action(createComponent);

program.parse(process.argv);
