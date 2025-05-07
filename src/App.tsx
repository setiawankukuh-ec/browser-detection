import { useEffect, useState } from "react";
import { BrowserDetector } from "./utils/trackers/browser";

export default function IndexView() {
  const [results, setResults] = useState<Record<string, string>>({});

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const browserDetector = new BrowserDetector(userAgent);

    const detectionResults = {
      "Detection with User Agent": browserDetector.detect(),
      "Detection with Bowser": browserDetector.detectWithBowser(),
      "Detecting IE via features": browserDetector.isInternetExplorer,
    };

    setResults(detectionResults);
  }, []);

  return (
    <div>
      <h2>Browser Detection Results</h2>
      <ul>
        {Object.entries(results).map(([method, value]) => (
          <li key={method}>
            <strong>{method}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
