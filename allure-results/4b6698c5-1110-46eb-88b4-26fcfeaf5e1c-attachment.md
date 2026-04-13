# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mousehover.spec.js >> mouse hover test
- Location: tests/mousehover.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[text()=\'Manage\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - button "Cart" [ref=e10] [cursor=pointer]
        - img "menu" [ref=e11] [cursor=pointer]
        - generic [ref=e12]:
          - generic [ref=e13]:
            - text: Learn Automation Courses
            - img "delete" [ref=e14] [cursor=pointer]
          - generic [ref=e15]:
            - link "Home" [ref=e16] [cursor=pointer]:
              - /url: /
              - generic [ref=e17]: Home
            - link "Practise" [ref=e18] [cursor=pointer]:
              - /url: /practise
              - generic [ref=e19]: Practise
            - button "Sign out" [ref=e20] [cursor=pointer]
  - generic [ref=e23]:
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Selenium For Web Automation" [level=2] [ref=e29]
        - paragraph [ref=e30]: Selenium For Web Automation...
      - generic [ref=e31]:
        - img "instructor" [ref=e32]
        - text: Mukesh Otwani
      - generic [ref=e33]:
        - img "clock" [ref=e34]
        - generic [ref=e35]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=e36]:
        - img "clock" [ref=e37]
        - generic [ref=e38]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=e39]:
        - text: "Price:"
        - generic [ref=e40]: ₹1500
      - button "Add to Cart right arrow" [ref=e41] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e42]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading "JSP" [level=2] [ref=e48]
        - paragraph [ref=e49]: Course...
      - generic [ref=e50]:
        - img "instructor" [ref=e51]
        - text: Mukesh
      - generic [ref=e52]:
        - img "clock" [ref=e53]
        - generic [ref=e54]: "Start:"
        - text: Thu Apr 02 2026
      - generic [ref=e55]:
        - img "clock" [ref=e56]
        - generic [ref=e57]: "Finish:"
        - text: Sat May 02 2026
      - generic [ref=e58]:
        - text: "Price:"
        - generic [ref=e59]: ₹500
      - button "Add to Cart right arrow" [ref=e60] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e61]
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Playwright with JavaScrip" [level=2] [ref=e67]
        - paragraph [ref=e68]: This is a course for testing...
      - generic [ref=e69]:
        - img "instructor" [ref=e70]
        - text: Mukesh Otwani
      - generic [ref=e71]:
        - img "clock" [ref=e72]
        - generic [ref=e73]: "Start:"
        - text: Mon Apr 20 2026
      - generic [ref=e74]:
        - img "clock" [ref=e75]
        - generic [ref=e76]: "Finish:"
        - text: Sun May 24 2026
      - generic [ref=e77]:
        - text: "Price:"
        - generic [ref=e78]: ₹500
      - button "Add to Cart right arrow" [ref=e79] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e80]
    - generic [ref=e84]:
      - generic [ref=e85]:
        - heading "Playwright checkpoint12345" [level=2] [ref=e86]
        - paragraph [ref=e87]: Playwright Advanced Checkpoint...
      - generic [ref=e88]:
        - img "instructor" [ref=e89]
        - text: Tech Thread
      - generic [ref=e90]:
        - img "clock" [ref=e91]
        - generic [ref=e92]: "Start:"
        - text: Thu May 07 2026
      - generic [ref=e93]:
        - img "clock" [ref=e94]
        - generic [ref=e95]: "Finish:"
        - text: Sun Jun 07 2026
      - generic [ref=e96]:
        - text: "Price:"
        - generic [ref=e97]: ₹9999
      - button "Add to Cart right arrow" [ref=e98] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e99]
    - generic [ref=e103]:
      - generic [ref=e104]:
        - heading "Test" [level=2] [ref=e105]
        - paragraph [ref=e106]: Twsat...
      - generic [ref=e107]:
        - img "instructor" [ref=e108]
        - text: NA
      - generic [ref=e109]:
        - img "clock" [ref=e110]
        - generic [ref=e111]: "Start:"
        - text: Fri Apr 10 2026
      - generic [ref=e112]:
        - img "clock" [ref=e113]
        - generic [ref=e114]: "Finish:"
        - text: Wed May 20 2026
      - generic [ref=e115]:
        - text: "Price:"
        - generic [ref=e116]: ₹699
      - button "Add to Cart right arrow" [ref=e117] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e118]
  - generic [ref=e120]:
    - generic [ref=e121]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e122]
      - heading "©2023 All rights reserved" [level=2] [ref=e123]
    - generic [ref=e124] [cursor=pointer]:
      - link [ref=e125]:
        - /url: https://youtube.com/MukeshOtwani
        - img [ref=e126]
      - link [ref=e129]:
        - /url: https://twitter.com/MukeshOtwani
        - img [ref=e130]
      - link [ref=e132]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - img [ref=e133]
      - link [ref=e135]:
        - /url: https://www.facebook.com/groups/256655817858291
        - img [ref=e136]
```

# Test source

```ts
  1  | const {test, expect} = require("@playwright/test");
  2  | 
  3  | test("mouse hover test", async function({page}){
  4  | 
  5  |     page.goto("https://freelance-learn-automation.vercel.app/login");
  6  |     await page.getByPlaceholder("Enter Email").type("admin@gmail.com",{delay:100});
  7  |     await page.locator("//input[@id='password1']").type("admin123",{delay:100});
  8  |     // await page.locator("//button[@type='submit']").click();
  9  |     // or
  10 |     await page.getByRole("button", {name:"Sign in"}).click();
> 11 |     await page.locator("//span[text()='Manage']").hover();
     |                                                   ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  12 |     await page.locator("//a[normalize-space()='Manage Courses']").click();
  13 | 
  14 | })
```