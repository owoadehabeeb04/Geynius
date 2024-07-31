import { openaiUrl } from '../constants';

type dataProps = {
    prompt: string
}
export const fetchData = async ({prompt}: dataProps) => {
  try {
    const response = await fetch(
      `${openaiUrl}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `${prompt}`,
          // eslint-disable-next-line camelcase
          max_tokens: 1000,
          temperature: 0.7,
        }),
      }
    );
    const data = await response.json();

    return data.choices[0].text;
  } catch (err) {
    console.error(err);
  }
};
