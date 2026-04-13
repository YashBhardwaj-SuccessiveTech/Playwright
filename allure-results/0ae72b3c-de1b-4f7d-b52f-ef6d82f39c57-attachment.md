# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handleautosuggestions.spec.js >> Handling auto suggestions using keyboard
- Location: tests/handleautosuggestions.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//li[@role=\'presentation\']') to be visible
    64 × locator resolved to 6 elements. Proceeding with the first one: <li role="presentation">…</li>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "About" [ref=e4] [cursor=pointer]:
        - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
      - link "Store" [ref=e5] [cursor=pointer]:
        - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link "Gmail" [ref=e10] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
          - link "Search for Images" [ref=e12] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=en&ogbl
            - text: Images
        - button "Google apps" [ref=e15] [cursor=pointer]:
          - img [ref=e16]
        - link "Sign in" [ref=e20] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
    - img "Google" [ref=e23]
    - search [ref=e31]:
      - generic [ref=e33]:
        - generic [ref=e35]:
          - button "Upload files or images" [ref=e37] [cursor=pointer]:
            - img [ref=e39]
          - combobox "Search" [ref=e42]: Yash
          - generic [ref=e43]:
            - button "Clear" [ref=e45] [cursor=pointer]:
              - img [ref=e47]
            - link "AI Mode" [ref=e49] [cursor=pointer]:
              - generic [ref=e51]:
                - img [ref=e53]
                - generic [ref=e60]: AI Mode
        - generic [ref=e62]:
          - button "Google Search" [ref=e63] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e64] [cursor=pointer]
    - generic [ref=e67]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e68] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCA
      - link "বাংলা" [ref=e69] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCE
      - link "తెలుగు" [ref=e70] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCI
      - link "मराठी" [ref=e71] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCM
      - link "தமிழ்" [ref=e72] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCQ
      - link "ગુજરાતી" [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCU
      - link "ಕನ್ನಡ" [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCY
      - link "മലയാളം" [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCc
      - link "ਪੰਜਾਬੀ" [ref=e76] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_kHrLtWnxBi4yCFVulbLeY46ii5Y%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwi8_aD-xuqTAxVoTGwGHU53J60Q2ZgBCCg
    - contentinfo [ref=e78]:
      - generic [ref=e79]: India
      - generic [ref=e80]:
        - generic [ref=e81]:
          - link "Advertising" [ref=e82] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
          - link "Business" [ref=e83] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
          - link "How Search works" [ref=e84] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
        - generic [ref=e85]:
          - link "Privacy" [ref=e86] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
          - link "Terms" [ref=e87] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-IN&fg=1
          - button "Settings" [ref=e91] [cursor=pointer]:
            - generic [ref=e92]: Settings
  - generic:
    - dialog "Choose Chrome, the browser built by Google":
      - generic [ref=e101]:
        - generic [ref=e102]: Choose Chrome, the browser built by Google
        - generic [ref=e103]: Try a fast, secure browser with automatic updates
        - generic [ref=e104]:
          - button "Do not use Chrome" [ref=e106] [cursor=pointer]:
            - generic [ref=e108]: Do not use Chrome
          - button "Get Chrome" [ref=e110] [cursor=pointer]:
            - generic [ref=e112]: Get Chrome
```

# Test source

```ts
  1  | const {test, expect} = require("@playwright/test");
  2  | 
  3  | test("Handling auto suggestions using keyboard", async function({page}) {
  4  | 
  5  |     await page.goto("https://www.google.com/");
  6  |     await page.locator("textarea[name='q']").focus();
  7  | 
  8  |     await page.keyboard.type("Yash Bhardwaj");
  9  | 
> 10 |     await page.waitForSelector("//li[@role='presentation']");
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  11 | 
  12 |     await page.keyboard.press("ArrowDown");
  13 |     await page.keyboard.press("ArrowDown");
  14 |     await page.keyboard.press("Enter");
  15 | 
  16 | });
  17 | 
  18 | 
  19 | // second approach to do this 
  20 | 
  21 | test("Handling auto suggestions using loop", async function({page}) {
  22 | 
  23 |     await page.goto("https://www.google.com/");
  24 |     await page.locator("textarea[name='q']").focus();
  25 | 
  26 |     await page.keyboard.type("Yash Bhardwaj");
  27 | 
  28 |     await page.waitForSelector("//li[@role='presentation']");
  29 | 
  30 |     const findstatus = false;
  31 | 
  32 |     const elements = await page.$$("//li[@role='presentation']");
  33 |     for(let i=0;i<elements.length;i++){
  34 |         const text = elements[i].textContent();
  35 |         // or if(text.includes("github")){
  36 |         // await elements[i].click();
  37 |         // }
  38 |         if(text=="yash bhardwaj github"){
  39 |             await page.keyboard.press("Enter");
  40 |             findstatus = true;
  41 |             break;
  42 |         }
  43 |     }
  44 | 
  45 |     await expect(findstatus).toBeTruthy();
  46 | 
  47 | });
  48 | 
  49 | 
```