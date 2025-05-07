import Bowser from "bowser";

export class BrowserDetector {
  private userAgent: string;

  constructor(userAgent: string) {
    this.userAgent = userAgent;
  }

  detect(): string {
    if (
      this.userAgent.includes("MSIE") ||
      this.userAgent.includes("Trident/")
    ) {
      return "Internet Explorer";
    } else if (this.userAgent.includes("Seamonkey/")) {
      return "Seamonkey";
    } else if (
      this.userAgent.includes("Firefox/") &&
      !this.userAgent.includes("Seamonkey/")
    ) {
      return "Firefox";
    } else if (this.userAgent.includes("OPR/")) {
      return "Opera (Blink)";
    } else if (this.userAgent.includes("Opera/")) {
      return "Opera (Presto)";
    } else if (
      this.userAgent.includes("Chrome/") &&
      !this.userAgent.includes("Chromium/") &&
      !this.userAgent.match(/Edg\//)
    ) {
      return "Chrome";
    } else if (this.userAgent.includes("Chromium/")) {
      return "Chromium";
    } else if (
      this.userAgent.includes("Safari/") &&
      !this.userAgent.includes("Chrome/") &&
      !this.userAgent.includes("Chromium/")
    ) {
      return "Safari";
    } else if (this.userAgent.match(/Edg\//)) {
      return "Edge";
    } else {
      return "Other";
    }
  }

  detectWithBowser(): string {
    const browser = Bowser.getParser(this.userAgent);
    const browserName = browser.getBrowserName();
    const browserVersion = browser.getBrowserVersion();
    return browserName ? `${browserName} ${browserVersion}` : "Unknown";
  }

  public get isInternetExplorer(): string {
    const isIE = !!(window as any).document?.documentMode;
    return isIE.toString();
  }
}
