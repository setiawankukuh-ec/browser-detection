import Bowser from "bowser";
export function isInternetExplorer(): string {
  // IE 6–11 has `document.documentMode`
  return `${!!(window as any).document?.documentMode}`;
}

export function detectViaUserAgent(userAgent: string): string {
  if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
    return "Internet Explorer";
  } else if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    return "Chrome";
  } else if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return "Safari";
  } else if (userAgent.includes("Edg")) {
    return "Edge";
  } else {
    return "Other";
  }
}

export function detectWithBowser(): string {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const browserName = browser.getBrowserName();
  const browserVersion = browser.getBrowserVersion();
  return browserName ? `${browserName} ${browserVersion}` : "Unknown";
}
