export default function formatEllipsis(text, size) {
  if (typeof text === 'object' && !text[0]) return null;
  if (typeof text === 'object' && text[0]) {
    const originalTextSize = text[0].text.length;
    const ellipsisText = text[0].text.slice(0, size);
    if (originalTextSize <= ellipsisText.length) return `${ellipsisText}...`;
    return ellipsisText;
  }
  if (!text) return null;
  const originalTextSize = text.length;
  const ellipsisText = text.slice(0, size);
  if (originalTextSize <= ellipsisText.length) return ellipsisText;
  return `${ellipsisText}...`;
}
