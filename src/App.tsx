import { useEffect, useState } from "react";
import {
  detectViaUserAgent,
  detectWithBowser,
  isInternetExplorer,
} from "./utils/trackers/browser";

export default function IndexView() {
  const [results, setResults] = useState<Record<string, string>>({});

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const detectionResults = {
      "Detection with User Agent": detectViaUserAgent(userAgent),
      "Detection with Bowser": detectWithBowser(),
      "Detecting IE via features": isInternetExplorer(),
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
