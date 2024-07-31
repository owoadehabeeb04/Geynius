import { openaiUrl } from '../constants';

type resumeProps = {
  name: string,
  website: string,
  profession: string,
  email: string,
  phone: string,
  skills: string,
  academics: string,
  work: string,
  other?: string
}
export const generateResume = async ({
  name,
  website,
  profession,
  email,
  phone,
  skills,
  academics,
  work,
  other = ''
}: resumeProps) => {
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
          prompt: `Write a one or two page professional resume in less than 500 words tailored for a ${profession} for  ${name} having the following details:
          phone number: ${phone}, email: ${email}, website: ${website} detail the went to school at ${academics},
          worked at ${work} and having the following skills: ${skills}. Other things you should know include: ${other}.`,
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


