export const OPEN_QUOTE_MODAL_EVENT = "caltic:open-quote-modal";

export function openQuoteModal() {
  window.dispatchEvent(new CustomEvent(OPEN_QUOTE_MODAL_EVENT));
}
