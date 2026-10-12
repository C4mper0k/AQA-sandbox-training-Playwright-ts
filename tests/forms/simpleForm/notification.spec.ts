import { test, expect } from '@playwright/test';
import { Forms } from '../../../pages/forms.spec.ts';

test.beforeEach('Open Sandbox', async ({ page }) => {
  page.goto('https://aqa-proka4.org/sandbox/web');
});

test.describe('Проверка отображения уведомления при клике на "Register"', async () => {
  test('Отображение уведомления при успешной отправке формы @simpleForm @smoke @regress', async ({
    page,
  }) => {
    const formPage = new Forms(page);

    await formPage.usernameFill();
    await formPage.emailFill();
    await formPage.passwordFill();
    await formPage.countrySelect();
    await formPage.termsCheck();
    await formPage.registerClick();

    await expect(formPage.simpleRegistrationForm.resultNotificationLocator).toBeVisible();
    await expect(formPage.simpleRegistrationForm.resultNotificationLocator).toHaveText(
      'Форма успешно отправлена!',
    );
  });
});
