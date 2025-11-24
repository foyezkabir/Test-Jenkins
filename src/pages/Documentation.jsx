import React from 'react';
import { Book, Code, Terminal, Cpu } from 'lucide-react';

const Documentation = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Documentation</h1>
                <p style={{ fontSize: '1.125rem', color: 'hsl(var(--text-muted))' }}>
                    Guides and examples for testing this application with popular automation frameworks.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '3rem' }}>
                <DocSection
                    id="cypress"
                    icon={Code}
                    title="Cypress Documentation"
                    description="Learn how to test this application using Cypress."
                    code={`describe('Login Flow', () => {
  it('should successfully login', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});`}
                />

                <DocSection
                    id="selenium"
                    icon={Terminal}
                    title="Selenium Documentation"
                    description="Java example for testing the login functionality with Selenium WebDriver."
                    code={`@Test
public void testLogin() {
    driver.get("http://localhost:5173/login");
    
    WebElement email = driver.findElement(By.name("email"));
    email.sendKeys("test@example.com");
    
    WebElement password = driver.findElement(By.name("password"));
    password.sendKeys("password123");
    
    driver.findElement(By.cssSelector("button[type='submit']")).click();
    
    wait.until(ExpectedConditions.urlContains("/dashboard"));
}`}
                />

                <DocSection
                    id="playwright"
                    icon={Book}
                    title="Playwright Documentation"
                    description="Modern end-to-end testing with Playwright."
                    code={`test('login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*dashboard/);
});`}
                />

                <DocSection
                    id="mcp"
                    icon={Cpu}
                    title="Playwright with MCP"
                    description="Using Model Context Protocol to drive Playwright tests."
                    code={`// Example of an MCP tool definition for this app
{
  name: "login_to_app",
  description: "Logs into the application",
  parameters: {
    type: "object",
    properties: {
      email: { type: "string" },
      password: { type: "string" }
    },
    required: ["email", "password"]
  }
}`}
                />
            </div>
        </div>
    );
};

const DocSection = ({ id, icon: Icon, title, description, code }) => (
    <div id={id} style={{
        background: 'hsl(var(--surface))',
        borderRadius: '1rem',
        border: '1px solid hsla(255, 100%, 100%, 0.1)',
        overflow: 'hidden'
    }}>
        <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                    padding: '0.75rem',
                    background: 'hsla(var(--primary), 0.1)',
                    borderRadius: '0.5rem',
                    color: 'hsl(var(--primary))'
                }}>
                    <Icon size={24} />
                </div>
                <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{title}</h2>
            </div>
            <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '2rem', fontSize: '1.1rem' }}>
                {description}
            </p>
            <div style={{
                background: '#1e1e1e',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                overflowX: 'auto',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                color: '#d4d4d4'
            }}>
                <pre style={{ margin: 0 }}>{code}</pre>
            </div>
        </div>
    </div>
);

export default Documentation;
