import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})

        # Open the local file
        file_path = "file://" + os.path.abspath("index.html")
        await page.goto(file_path)

        # Wait for animations to settle
        await asyncio.sleep(2)

        # Take full page screenshot
        await page.screenshot(path="full_page.png", full_page=True)

        # Take header screenshot
        header = await page.query_selector("nav")
        if header:
            await header.screenshot(path="navbar_redesign.png")

        # Take contact section screenshot
        contact = await page.query_selector("#contact")
        if contact:
            await contact.screenshot(path="contact_redesign.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
