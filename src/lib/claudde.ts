// Helper to programmatically open the Claudde Bot chat widget.
// The widget mounts as a custom element with a shadow root, so we search the
// document for any host element exposing a shadowRoot and click its launcher.

const LAUNCHER_SELECTORS = [
  "[data-claudde-launcher]",
  ".claudde-launcher",
  "#claudde-launcher",
  "button",
];

function findLauncher(): HTMLElement | null {
  const hosts = Array.from(document.querySelectorAll<HTMLElement>("*")).filter(
    (el) => !!el.shadowRoot
  );

  for (const host of hosts) {
    const root = host.shadowRoot!;
    for (const selector of LAUNCHER_SELECTORS) {
      const candidate = root.querySelector<HTMLElement>(selector);
      if (candidate) return candidate;
    }
  }

  return null;
}

export function openClauddeWidget(timeoutMs = 5000): void {
  const start = Date.now();

  const attempt = () => {
    try {
      const launcher = findLauncher();
      if (launcher) {
        launcher.click();
        return;
      }
    } catch {
      // ignore and retry
    }

    if (Date.now() - start < timeoutMs) {
      window.setTimeout(attempt, 250);
    }
  };

  attempt();
}
