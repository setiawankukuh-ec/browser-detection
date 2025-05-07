import Bowser from "bowser";

// IE 6–11 has `document.documentMode`
export function isInternetExplorer(): string {
  return `${!!(window as any).document?.documentMode}`;
}

/* https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent */
export function detectViaUserAgent(userAgent: string): string {
  if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
    return "Internet Explorer";
  } else if (userAgent.includes("Seamonkey/")) {
    return "Seamonkey";
  } else if (
    userAgent.includes("Firefox/") &&
    !userAgent.includes("Seamonkey/")
  ) {
    return "Firefox";
  } else if (userAgent.includes("OPR/")) {
    return "Opera (Blink)";
  } else if (userAgent.includes("Opera/")) {
    return "Opera (Presto)";
  } else if (
    userAgent.includes("Chrome/") &&
    !userAgent.includes("Chromium/") &&
    !userAgent.match(/Edg\//)
  ) {
    return "Chrome";
  } else if (userAgent.includes("Chromium/")) {
    return "Chromium";
  } else if (
    userAgent.includes("Safari/") &&
    !userAgent.includes("Chrome/") &&
    !userAgent.includes("Chromium/")
  ) {
    return "Safari";
  } else if (userAgent.match(/Edg\//)) {
    return "Edge";
  } else {
    return "Other";
  }
}

/* https://www.npmjs.com/package/bowser */
export function detectWithBowser(): string {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const browserName = browser.getBrowserName();
  const browserVersion = browser.getBrowserVersion();
  return browserName ? `${browserName} ${browserVersion}` : "Unknown";
}
