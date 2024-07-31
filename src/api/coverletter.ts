import { openaiUrl } from '../constants';

type coverProps = {
  jobTitle: string,
  company: string,
  skills: string,
  jd: string,
  other: string,
  name: string,
}

export const generateCoverLetter = async ({
  jobTitle,
  company,
  skills,
  jd,
  other,
  name,
}: coverProps) => {

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
          prompt: `Write a one cover letter in less than 500 words in a professional manner for  ${name} applying for the role of ${jobTitle} at ${company}. The job description is as follows: ${jd}. Take into consideration the following skillsets relevant to the job: ${skills}. Other things you should know include: ${other}.`,
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
