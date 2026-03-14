const delay = ms => new Promise(r => setTimeout(r, ms));

export async function generateFromURL({ url, generationType, visualStyle }) {
  await delay(2000);
  return {
    type: generationType,
    style: visualStyle,
    result: `Successfully generated a high-quality ${generationType} in a ${visualStyle} style for the product at ${url}. The AI has optimized this for maximum engagement.`,
  };
}

export async function generateFromManual({ title, description, generationType, visualStyle }) {
  await delay(2000);
  return {
    type: generationType,
    style: visualStyle,
    result: `Generated ${generationType} for "${title}". \n\nContent: ${description.substring(0, 50)}... [Optimized for ${visualStyle} style]`,
  };
}