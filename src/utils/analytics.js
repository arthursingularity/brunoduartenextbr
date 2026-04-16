export function trackEvent(name, params = {}) {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", name, params);
    }
}
