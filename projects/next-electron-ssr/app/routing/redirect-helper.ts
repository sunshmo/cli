'use server';

import { redirect, permanentRedirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';

export async function logout() {
  redirect(`/login`);
}

export async function prRedirect() {
  try {
    // 调用数据库
  } catch (error) {
    // 处理错误
    console.error(error);
  }

  revalidateTag('username'); // 更新所有对用户名的引用
  permanentRedirect(`/routing`); // 导航到新的用户资料
}
