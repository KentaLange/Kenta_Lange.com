import { expect, test } from '@playwright/test';

test.describe('Kenta Lange Portfolio Website', () => {
  test('loads homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle('Kenta Lange');
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Kenta Lange');
    
    // Check subtitle
    await expect(page.locator('.title')).toContainText('Computer Science Student');
    
    // Check location
    await expect(page.locator('.location')).toContainText('Tuckahoe, New York');
  });

  test('has correct navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check LinkedIn link
    const linkedinLink = page.locator('a[href*="linkedin.com/in/kentalange"]');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    
    // Check HackerRank link
    const hackerrankLink = page.locator('a[href*="hackerrank.com/KentaLange"]');
    await expect(hackerrankLink).toBeVisible();
    
    // Check GitHub link
    const githubLink = page.locator('a[href*="github.com/KentaLange"]');
    await expect(githubLink).toBeVisible();
    
    // Check Resume link
    const resumeLink = page.locator('a[href*="tinyurl.com/KentaLinkedIn"]');
    await expect(resumeLink).toBeVisible();
  });

  test('displays all sections correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check About section
    await expect(page.locator('h2').filter({ hasText: 'About' })).toBeVisible();
    await expect(page.locator('.section').filter({ hasText: 'Bilingual Computer Science student' })).toBeVisible();
    
    // Check Experience section
    await expect(page.locator('h2').filter({ hasText: 'Experience' })).toBeVisible();
    await expect(page.locator('.company').filter({ hasText: 'NIPPON DAIDO, INC' })).toBeVisible();
    await expect(page.locator('.company').filter({ hasText: 'CENTRAL AVENUE DENTAL ARTS' })).toBeVisible();
    
    // Check Education section
    await expect(page.locator('h2').filter({ hasText: 'Education' })).toBeVisible();
    await expect(page.locator('.company').filter({ hasText: 'University at Albany' })).toBeVisible();
    
    // Check Skills section
    await expect(page.locator('h2').filter({ hasText: 'Skills' })).toBeVisible();
    await expect(page.locator('.skill-category h3').filter({ hasText: 'Technical Skills' })).toBeVisible();
    await expect(page.locator('.skill-category h3').filter({ hasText: 'Languages' })).toBeVisible();
    await expect(page.locator('.skill-category h3').filter({ hasText: 'Professional' })).toBeVisible();
  });

  test('skills section contains correct items', async ({ page }) => {
    await page.goto('/');
    
    // Check technical skills
    await expect(page.locator('.skill-list li').filter({ hasText: 'Wireless Networking' })).toBeVisible();
    await expect(page.locator('.skill-list li').filter({ hasText: 'Project Planning' })).toBeVisible();
    
    // Check languages
    await expect(page.locator('.skill-list li').filter({ hasText: 'Japanese (Native)' })).toBeVisible();
    await expect(page.locator('.skill-list li').filter({ hasText: 'English (Native)' })).toBeVisible();
    
    // Check professional skills
    await expect(page.locator('.skill-list li').filter({ hasText: 'Customer Service' })).toBeVisible();
    await expect(page.locator('.skill-list li').filter({ hasText: 'Translation Services' })).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that content is still visible and properly laid out
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.links')).toBeVisible();
    
    // Check that skills grid adapts to mobile
    const skillsGrid = page.locator('.skills-grid');
    await expect(skillsGrid).toBeVisible();
  });

  test('hover effects work on links', async ({ page }) => {
    await page.goto('/');
    
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    
    // Check initial state
    await expect(linkedinLink).toHaveCSS('color', 'rgb(59, 130, 246)'); // --color-accent
    
    // Hover and check color change
    await linkedinLink.hover();
    await expect(linkedinLink).toHaveCSS('background-color', 'rgb(59, 130, 246)');
  });

  test('has proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check proper HTML structure
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('section')).toHaveCount(4); // About, Experience, Education, Skills
    
    // Check heading hierarchy
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h2')).toHaveCount(4);
    await expect(page.locator('h3')).toHaveCount(3);
  });
});