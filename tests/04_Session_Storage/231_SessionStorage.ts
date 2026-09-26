import { chromium } from "playwright";
import dotenv from "dotenv";
dotenv.config();

const vwo_user = process.env.wingifyUserName;
const vwo_pass = process.env.wingifyPassword;

async function saveSession(){
let browser =  await chromium.launch({ headless: false});
let context = await browser.newContext();
let page = await context.newPage();

await page.goto("https://app.wingify.com/#/login");

await page.fill("#login-username",vwo_user);
await page.fill("#login-password",vwo_pass);

await page.click("#js-login-btn");
await page.waitForURL(/#\/(dashboard)/,{timeout:30000});

await context.storageState({path: "./user-session.json"});
console.log("session saved to user-session.json");

await browser.close();

}
saveSession();