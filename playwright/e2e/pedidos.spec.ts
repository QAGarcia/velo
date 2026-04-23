import { test, expect } from '@playwright/test'

test('deve listar os pedidos', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveTitle(/Velô by Papito/)

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading', { name: 'Consultar Pedido' })).toBeVisible()

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-VW1CXF')  
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  await expect(page.getByText('VLO-VW1CXF')).toBeVisible({ timeout: 10000 })

  await expect(page.getByText('APROVADO')).toBeVisible()
})