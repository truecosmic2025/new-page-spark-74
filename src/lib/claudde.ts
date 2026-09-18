type ClauddeWidget = {
  open?: () => void;
};

declare global {
  interface Window {
    Claudde?: ClauddeWidget;
  }
}

function tryOpenClauddeWidget(): boolean {
  if (typeof window.Claudde?.open !== "function") return false;

  try {
    window.Claudde?.open();
    return true;
  } catch {
    return false;
  }
}

export function openClauddeWidget(timeoutMs = 5000): void {
  const start = Date.now();

  const attempt = () => {
    if (tryOpenClauddeWidget()) return;

    if (Date.now() - start < timeoutMs) {
      window.setTimeout(attempt, 250);
    }
  };

  attempt();
}
