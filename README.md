# Playwright Lab 🎭

End-to-end test automation framework built with **Playwright + TypeScript**, using the **Page Object Model** pattern.

## What's covered
Target app: [SauceDemo](https://www.saucedemo.com)

| Suite | Test case |
|---|---|
| Login | Successful login with valid user |
| Login | Failed login with invalid password |
| Cart | Add product to cart |
| Cart | Remove product from cart |
| Checkout | Complete purchase end-to-end |

Plus a TodoMVC suite as a locator and assertion playground.

## Structure
git init
git add .
git commit -m "Playwright framework with POM: login, cart and checkout tests"

git init
git add .
git commit -m "Playwright framework with POM: login, cart and checkout tests"
cat > ~/playwright-lab/README.md << 'EOF'
# Playwright Lab 🎭

End-to-end test automation framework built with **Playwright + TypeScript**, using the **Page Object Model** pattern.

## What's covered
Target app: [SauceDemo](https://www.saucedemo.com)

| Suite | Test case |
|---|---|
| Login | Successful login with valid user |
| Login | Failed login with invalid password |
| Cart | Add product to cart |
| Cart | Remove product from cart |
| Checkout | Complete purchase end-to-end |

Plus a TodoMVC suite as a locator and assertion playground.

## Structure

    pages/   -> Page Objects (locators + actions)
    tests/   -> Test specs (business flows + assertions)

## Run it

    npm install
    npx playwright install
    npx playwright test
    npx playwright show-report

## Tech
Playwright · TypeScript · Page Object Model · Chromium · Firefox

Author: **Jonahtan Valdez**, QA Lead / SDET
