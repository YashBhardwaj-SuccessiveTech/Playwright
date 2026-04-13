# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handleautosuggestions.spec.js >> Handling auto suggestions using loop
- Location: tests/handleautosuggestions.spec.js:21:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//li[@role=\'presentation\']') to be visible
    5 × locator resolved to 6 elements. Proceeding with the first one: <li role="presentation">…</li>
    58 × locator resolved to 16 elements. Proceeding with the first one: <li role="presentation">…</li>

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
          - combobox "Search" [expanded] [ref=e42]:
            - text: Yash Bhardwaj
            - listbox [ref=e44]:
              - option "yash bhardwaj" [ref=e48]:
                - generic [ref=e49]: yash bhardwaj
              - option "yash bhardwaj linkedin" [ref=e53]:
                - generic [ref=e54]: yash bhardwaj linkedin
              - option "yash bhardwaj cricketer" [ref=e58]:
                - generic [ref=e59]: yash bhardwaj cricketer
              - option "yash bhardwaj github" [ref=e63]:
                - generic [ref=e64]: yash bhardwaj github
              - option "yash bhardwaj sonia garg" [ref=e68]:
                - generic [ref=e69]: yash bhardwaj sonia garg
              - option "Yash Bhardwaj home, Jaitpur Extension, Jaitpur, New Delhi, Delhi" [ref=e73]:
                - generic [ref=e74]: Yash Bhardwaj home, Jaitpur Extension, Jaitpur, New Delhi, Delhi
              - option "Yash bhardwaj, Sai Enclave Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh" [ref=e78]:
                - generic [ref=e79]: Yash bhardwaj, Sai Enclave Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh
              - option "yash bhardwaj is he happy" [ref=e83]:
                - generic [ref=e84]: yash bhardwaj is he happy
              - option "yash bhardwaj rula korban" [ref=e88]:
                - generic [ref=e89]: yash bhardwaj rula korban
              - option "yash bhardwaj instagram" [ref=e93]:
                - generic [ref=e94]: yash bhardwaj instagram
          - generic [ref=e95]:
            - button "Clear" [ref=e97] [cursor=pointer]:
              - img [ref=e99]
            - link "AI Mode" [ref=e101] [cursor=pointer]:
              - generic [ref=e103]:
                - img [ref=e105]
                - generic [ref=e112]: AI Mode
        - generic [ref=e113]:
          - generic [ref=e117]:
            - button "Google Search" [ref=e118] [cursor=pointer]
            - button "I'm Feeling Lucky" [ref=e119] [cursor=pointer]
          - button "Report inappropriate predictions" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: Report inappropriate predictions
        - generic [ref=e123]:
          - button "Google Search" [ref=e124] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e125] [cursor=pointer]
    - generic [ref=e128]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e129] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCA
      - link "বাংলা" [ref=e130] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCE
      - link "తెలుగు" [ref=e131] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCI
      - link "मराठी" [ref=e132] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCM
      - link "தமிழ்" [ref=e133] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCQ
      - link "ગુજરાતી" [ref=e134] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCU
      - link "ಕನ್ನಡ" [ref=e135] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCY
      - link "മലയാളം" [ref=e136] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCc
      - link "ਪੰਜਾਬੀ" [ref=e137] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_MvfjRtuLcmPyrzWI6_-twhBK2zM%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiw1oD_xuqTAxUHS2cHHV7UNTsQ2ZgBCCg
    - contentinfo [ref=e139]:
      - generic [ref=e140]: India
      - generic [ref=e141]:
        - generic [ref=e142]:
          - link "Advertising" [ref=e143] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
          - link "Business" [ref=e144] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
          - link "How Search works" [ref=e145] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
        - generic [ref=e146]:
          - link "Privacy" [ref=e147] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
          - link "Terms" [ref=e148] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-IN&fg=1
          - button "Settings" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: Settings
  - generic:
    - dialog "Choose Chrome, the browser built by Google":
      - generic [ref=e162]:
        - generic [ref=e163]: Choose Chrome, the browser built by Google
        - generic [ref=e164]: Try a fast, secure browser with automatic updates
        - generic [ref=e165]:
          - button "Not interested" [ref=e167] [cursor=pointer]:
            - generic [ref=e169]: Not interested
          - button "Try it" [ref=e171] [cursor=pointer]:
            - generic [ref=e173]: Try it
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
  10 |     await page.waitForSelector("//li[@role='presentation']");
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
> 28 |     await page.waitForSelector("//li[@role='presentation']");
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
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