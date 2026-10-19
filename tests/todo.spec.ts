import { test, expect } from '@playwright/test';

test('agregar tareas y completar una', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const nuevaTarea = page.getByPlaceholder('What needs to be done?');
  const tareas = page.getByTestId('todo-item');

  await nuevaTarea.fill('Ir al gym');
  await nuevaTarea.press('Enter');
  await nuevaTarea.fill('Aplicar a 10 vacantes');
  await nuevaTarea.press('Enter');

  await expect(tareas).toHaveCount(2);
  await expect(tareas).toHaveText(['Ir al gym', 'Aplicar a 10 vacantes']);

  await tareas.filter({ hasText: 'Ir al gym' }).getByLabel('Toggle Todo').check();

  await expect(tareas.first()).toHaveClass(/completed/);
  await expect(page.getByTestId('todo-count')).toHaveText('1 item left');
});
