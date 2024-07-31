import uspOne from '../static/img/uspOne.svg'
import uspTwo from '../static/img/uspTwo.svg'
import uspThree from '../static/img/uspThree.svg'
import uspFour from '../static/img/uspFour.svg'
import uspFive from '../static/img/uspFive.svg'

import selectProduct from '../static/img/selectProduct.svg'
import selectProduct2 from '../static/img/selectProduct2.svg'

import selectProduct3 from '../static/img/selectProduct3.svg'

import portfolioImage1 from '../static/img/portfolioImage1.svg'
import portfolioImage2 from '../static/img/2.png'
import portfolioImage3 from '../static/img/Screenshot (538).png'
import portfolioImage4 from '../static/img/4.png'
import { ReactNode } from 'react'
import skillImage1 from '../static/img/skillimage1.png'
import skillImage2 from '../static/img/skillimage2.png'
import projectImg1 from '../static/img/projectimg1.png'
import projectImg2 from '../static/img/projectimg2.png'
const currentYear = new Date().getFullYear()

export const openaiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
export const coverResultHeaderText = 'Here’s Your Cover Letter'
export const coverResultNormalText =
  'Please go through the cover letter and confirm any necessary details generated'
export const resumeResultHeaderText = 'Here’s Your Resume'
export const resumeResultNormalText =
  'Please go through your resume and confirm any necessary details generated'
export const navBarItems = [
  {
    id: 1,
    name: 'Home',
    route: '/',
  },
  {
    id: 2,
    name: 'About',
    route: '/About',
  },

  {
    id: 3,
    name: 'Resources',
    route: '/resources',
  },
  // {
  //   id: 4,
  //   name: 'Products',
  //   route: '/products',
  // },
  // {
  //   id: 5,
  //   name: 'Company',
  //   route: '/company',
  // },
]

export const uspArr = [
  {
    id: 1,
    boldText: 'A Free Platform',
    text: 'Our service offers a free portfolio for your career profile with just a few clicks.',
    img: uspOne,
  },
  {
    id: 2,
    boldText: 'Unique Design templates',
    text: 'We provide very unique design templates for our user to select from.',
    img: uspTwo,
  },
  {
    id: 3,
    boldText: 'Fast and Seamless',
    text: 'With Just your CV and a few next steps we can get you a desired portfolio.',
    img: uspThree,
  },
  {
    id: 4,
    boldText: 'Detailed CV Builder',
    text: 'You get to build your CV with our platform in just some few steps.',
    img: uspFour,
  },
  {
    id: 5,
    boldText: 'Job Application Links ',
    text: 'We provide numerous links to various job platforms for different career paths.',
    img: uspFive,
  },
]

export const selectProducts = [
  {
    id: 1,
    boldText: 'Cover Letter',
    url: 'cover',
    text: 'Build Your Best Cover Letter Ever. Try Our Generator.',
    buttonText: 'Create a Cover letter',
    color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
    img: selectProduct2,
  },
  {
    id: 2,
    boldText: 'Portfolio',
    url: 'portfolio',
    text: 'Make your own unique portfolio website from beautiful templates.',
    buttonText: 'Build your Portfolio',
    color: 'border-[1.2px] border-solid border-portfolio-color text-portfolio-color rounded-md',
    img: selectProduct,
  },
  {
    id: 3,
    boldText: 'Resume/CV',
    url: 'resume',
    text: 'Make Your CV in a Few Clicks. No Writing Required!',
    buttonText: 'Create your Resume',
    color: 'border-[1.2px] border-solid border-resume-color text-resume-color rounded-md',
    img: selectProduct3,
  },
]

export const socialMediaArr = [
  {
    id: 1,
    media: 'twitter',
  },
  {
    id: 2,
    media: 'facebook',
  },
  {
    id: 3,
    media: 'telegram',
  },
]
export const footerProducts = [
  {
    id: 1,
    text: 'Products',
  },
  {
    id: 2,
    text: 'Portfolio Builder',
  },
  {
    id: 3,
    text: 'CV Builder',
  },
  {
    id: 4,
    text: 'Job Board',
  },
]

export const footerLegal = [
  {
    id: 1,
    text: 'Legal',
  },
  {
    id: 2,
    text: 'Privacy Policy',
  },
  {
    id: 3,
    text: 'Cookies policy',
  },
  {
    id: 4,
    text: 'Terms and Conditions',
  },
]

export const footerCompany = [
  {
    id: 1,
    text: 'Company',
  },
  {
    id: 2,
    text: 'About Us',
  },
  {
    id: 3,
    text: 'FAQs',
  },
  {
    id: 4,
    text: 'Community',
  },
]

export const footerContact = [
  {
    id: 1,
    text: 'Contact',
  },
  {
    id: 2,
    text: 'Contact Centre',
  },
  {
    id: 3,
    text: 'Feedback',
  },
]

export const copyRight = `Copyright © ${currentYear}, Geynius. All rights reserved.`
export const uspBoldText = 'What Makes our Product Unique'

export const uspSmallText =
  'We offer a very simple and Unique designs for anyone to build their portfolios, very quickly and seamless.'
export const heroItems = ['Fast', 'Reliable', 'Unique']

// select product page
export const selectProductHeader1Text = 'Setup Your Profile with Us'
export const selectProductHeader2Text =
  'Please select what product you would like to try out with us'

// Portfolio
export const portfolioHeaderText = 'Setup Your Portfolio'
export const portfolioNormalText =
  'Create a Profile with us to upload your portfolio on our website'
export const portfolioFormState = {
  name: '',
  websiteTitle: '',
  profession: '',
  email: '',
  password: '',
}
export const SolutionArray = [
  {
    myImage: skillImage1,
    myImage2: skillImage2,
    header: 'Skills I Offer',
    subheader: 'Here are some of the skills I can offer as a service',
    imgtext: 'Design Thinking',
    img2text: 'User Research',
    subImgtext: '',
    subImg2text: '',
    id: 'skills',
    slideArray: [
      {
        myImage: skillImage1,
        myImage2: skillImage2,
        imgtext: 'Design Thinking',
        img2text: 'User Research',
        subImgtext: '',
        subImg2text: '',
      },
      {
        myImage: skillImage2,
        myImage2: skillImage2,
        imgtext: 'why are you Thinking',
        img2text: 'Always Research',
        subImgtext: 'gdgfhfgh',
        subImg2text: '',
      },
    ],
  },
  {
    myImage: projectImg1,
    myImage2: projectImg2,
    header: 'Projects Worked On',
    subheader: 'Here are some of the projects i have worked on over the years',
    imgtext: 'Telidoc',
    img2text: 'Classic House',
    subImgtext: 'Telemedicine | User Research | Information Architecture',
    subImg2text: 'E-commerce | Design Thinking | Prototyping',
    id: 'projects',
    slideArray: [
      {
        myImage: skillImage1,
        myImage2: skillImage1,
        imgtext: 'Design Thinking',
        img2text: 'User Research',
        subImgtext: '',
        subImg2text: '',
      },
      {
        myImage: skillImage2,
        myImage2: skillImage2,
        imgtext: 'Design Thinking',
        img2text: 'User Research',
        subImgtext: '',
        subImg2text: '',
      },
    ],
  },
  {
    myImage: skillImage2,
    myImage2: skillImage1,
    header: 'Services Rendered',
    subheader: 'These are some examples of the services provided by us ',
    imgtext: 'Design Thinking',
    img2text: 'User Research',
    subImgtext: '',
    subImg2text: '',
    id: 'services',
    slideArray: [
      {
        myImage: skillImage2,
        myImage2: skillImage2,
        imgtext: 'Design Thinking',
        img2text: 'User Research',
        subImgtext: '',
        subImg2text: '',
      },
      {
        myImage: skillImage1,
        myImage2: skillImage2,
        imgtext: 'Design Thinking',
        img2text: 'User Research',
        subImgtext: '',
        subImg2text: '',
      },
    ],
  },
]
export type portfolioNavbarTypes = {
  id: number
  name: string
  route: string
  offset: number
  duration: number
}
export const PortfolioNavBarItems: portfolioNavbarTypes[] = [
  {
    id: 1,
    name: 'Home',
    route: '/portfolioPage',
    offset: -100,
    duration: 500,
  },
  {
    id: 2,
    name: 'Skills',
    route: 'skills',
    offset: -90,
    duration: 500,
  },
  {
    id: 3,
    name: 'Projects',
    route: 'projects',
    offset: -80,
    duration: 500,
  },
  // {
  //   id: 4,
  //   name: 'Services',
  //   route: 'services',
  //   offset: -80,
  //   duration: 500,
  // },
  {
    id: 5,
    name: 'Contact',
    route: 'contact',
    offset: -100,
    duration: 500,
  },
]

export const portfolioArray = [
  {
    id: 1,
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'abc@ab.com',
    value: '',
  },
  {
    id: 2,
    label: 'Website title',
    type: 'text',
    name: 'websiteTitle',
    placeholder: 'Wesite name',
    value: '',
  },
  {
    id: 3,
    label: 'Profession',
    name: 'profession',
    type: 'text',
    placeholder: 'Choose your profession',
    value: '',
  },
  // we don't need password
  // {
  //   id: 4,
  //   label: 'Password',
  //   name: 'password',
  //   type: 'password',
  //   placeholder: 'Password must be atleast 6 characters long',
  //   value: '',
  // },
  {
    id: 4,
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter Full Name',
    value: '',
  },
]

// Resume
export const resumeHeaderText = 'Setup Your Resume'
export const resumeNormalText = 'Create your resume in minutes'
export const resumeFormState = {
  name: '',
  website: '',
  profession: '',
  email: '',
  phone: '',
  skills: '',
  academics: '',
  work: '',
  other: '',
}
export const resumeArray = [
  {
    id: 1,
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter Full Name',
    value: '',
  },
  {
    id: 2,
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'abc@ab.com',
    value: '',
  },
  {
    id: 3,
    label: 'Portfolio Website',
    type: 'text',
    name: 'website',
    placeholder: ' e.g. www.myportfolio.com',
    value: '',
  },
  {
    id: 4,
    label: 'Profession',
    name: 'profession',
    type: 'text',
    placeholder: 'Choose your profession',
    value: '',
  },
  {
    id: 5,
    label: 'Phone Number',
    name: 'phone',
    type: 'text',
    placeholder: '070123456789',
    value: '',
  },
  {
    id: 6,
    label: 'Skills Set',
    name: 'skills',
    type: 'textarea',
    note: 'e.g. Leadership, Swimming, Write Articles and Cook',
    placeholder: 'Enter your skillsets ',
    value: '',
  },
  {
    id: 7,
    label: 'Academic Profile',
    name: 'academics',
    type: 'textarea',
    note: 'e.g. ABC International Schools 2010 to 2015, University of Lake - Bsc Economics 2017 - 2022',
    placeholder: 'Schools attended with dates',
    value: '',
  },
  {
    id: 8,
    label: 'Work Experience ',
    type: 'textarea',
    name: 'work',
    placeholder: 'List past and current jobs, title, company & period',
    value: '',
    note: 'e.g. Worked at PwC as Product Manager 2017 - 2019',
  },
  {
    id: 9,
    label: 'Other important Information ',
    type: 'textarea',
    name: 'other',
    placeholder: 'Any other information',
    value: '',
    note: 'e.g. Worked at PwC as PM for 6 months internship',
  },
]

// Cover
export const coverHeaderText = 'Setup Your Cover Letter'
export const coverNormalText = 'Create your Cover letter in minutes'
export const coverFormState = {
  jobTitle: '',
  company: '',
  skills: '',
  jd: '',
  other: '',
  name: '',
}
export const coverArray = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter First name only',
    value: '',
  },
  {
    id: 2,
    label: 'Job title',
    type: 'text',
    name: 'jobTitle',
    note: 'e.g. Growth Product Manager',
    placeholder: 'Enter job title description',
    value: '',
  },
  {
    id: 3,
    label: 'Company',
    name: 'company',
    type: 'text',
    note: 'e.g. ABC limited',
    placeholder: 'Enter Company name you are applying to',
    value: '',
  },
  {
    id: 4,
    label: 'Skills relevant to the job',
    name: 'skills',
    type: 'textarea',
    note: 'e.g. Leadership, Swimming, Write Articles and Cook.',
    placeholder: 'Enter your skillset relevant to the job as described',
    value: '',
  },
  {
    id: 5,
    label: 'Job description as advertised',
    name: 'jd',
    type: 'textarea',
    placeholder: 'Enter Job description',
    value: '',
    note: 'write/copy and paste the job description',
  },
  {
    id: 6,
    label: 'Other important Information ',
    type: 'textarea',
    name: 'other',
    placeholder: 'Any other information',
    value: '',
    note: 'e.g. Worked at PwC as PM for 6 months internship',
  },
]

export interface Props {
  children?: ReactNode
  // any props that come into the component
}

// params to page
export const mapOfPageToParams = {
  portfolio: {
    cornerImgColor: '#f3fff9',
    inputBg: 'bg-[#f9fffB]',
    headerText: portfolioHeaderText,
    normalText: portfolioNormalText,
    formArray: portfolioArray,
    formState: portfolioFormState,
    mainColor: '#214e34',
    minorColorTwo: '#8F8A4D',
    buttonColor: 'border-[#214e34]',
    buttonBg: 'bg-[#214e34]',
    minorColor: '#30724c',
    textColor: 'text-[#214e34]',
  },
  resume: {
    cornerImgColor: '#fff2fa',
    inputBg: 'bg-[#fefdec]',
    headerText: resumeHeaderText,
    normalText: resumeNormalText,
    formArray: resumeArray,
    formState: resumeFormState,
    mainColor: '#535052',
    minorColorTwo: '#8E3468',
    buttonColor: 'border-[#8e3468]',
    buttonBg: 'bg-[#8e3468]',
    minorColor: '#000000',
    textColor: 'text-[#8e3468]',
  },
  cover: {
    cornerImgColor: '#ededff',
    inputBg: 'bg-[#FAFAFF]',
    headerText: coverHeaderText,
    normalText: coverNormalText,
    formArray: coverArray,
    formState: coverFormState,
    mainColor: '#1f1844',
    minorColorTwo: '#a7a5ee',
    buttonColor: 'border-[#8e3468]',
    buttonBg: 'bg-[#8e3468]',
    minorColor: '#1F1844',
    textColor: 'text-[#8e3468]',
  },
}

// SetUp Portfolio

// select product page
export const SetUpPortfolioHeader1Text = 'Setup Your Portfolio'
export const SetUpPortfolioHeader2Text = 'Setup Your Profile with Us'
export const useTemplate = 'USE TEMPLATE...'
export const livePreview = 'Live Preview'
export const managePages = 'Manage Pages'
export const nextPage = 'Next Page'
export const submit = 'Submit'
export const editDetails = 'Edit Details'
export const Preview = 'Preview'
export const Back = 'Back'
export const Reset = 'Reset'
export const homePagePortfolioHeader = 'Fill Your Portfolio Information'
export const homePagePortfolioSmall =
  'Please kindly fill in all necessary details to setup your portfolio'

export const contactPortfolioHeader = 'Add Your Contact Information'
export const contactPortfolioSmall = 'Please kindly fill in all necessary details'

export const skillsPagePortfolioHeader = 'Add Your Skills'
export const skillsPagePortfolioSmall = 'You can add any skills that you have here..'
export const skillsPlaceHolderText = 'Search and add any skills'
export const addedSkillsPagePortfolioSmall = 'Added Skills:'

export const servicesPagePortfolioHeader = 'Add Your Services'
export const servicesPagePortfolioSmall = 'You can add any service that you offer here'
export const servicesPlaceHolderText = 'Search and add any service'
export const servicesAddPagePortfolioSmall = 'Added Services:'

export const projectPagePortfolioHeader = 'Add Your Projects'
export const projectCoverLetter = 'Cover Image'
export const projectPagePortfolioSmall = 'You can add any projects that you have worked on here..'
export const portfolioSamples = [
  // {
  //   id: 'template1',
  //   useTemplate: 'firstTemplate',
  //   boldText: 'Creative Agency, corporate and Personal Temp...',
  //   url: 'cover',
  //   rating: 4.5,
  //   name: 'By Daniel Diya',
  //   star: '(216)',
  //   // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
  //   img: portfolioImage1,
  // },
  // {
  //   id: 'template2',
  //   useTemplate: 'secondTemplate',

  //   boldText: 'Creative Agency, corporate and Personal Temp...',
  //   url: 'cover',
  //   name: 'By Daniel Diya',
  //   star: '(216)',
  //   rating: 4.5,
  //   // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
  //   img: portfolioImage2,
  // },
  {
    id: 'template3',
    useTemplate: 'thirdTemplate',
    boldText: 'Creative Agency, corporate and Personal Temp...',
    url: 'cover',
    rating: 4.5,
    name: 'By HABEEBDEV',
    star: '(216)',
    // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
    img: portfolioImage3,
  },
  // {
  //   id: 'template4',
  //   useTemplate: 'fourthTemplate',
  //   boldText: 'Creative Agency, corporate and Personal Temp...',
  //   url: 'cover',
  //   name: 'By Daniel Diya',
  //   rating: 4.5,
  //   star: '(216)',
  //   // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
  //   img: portfolioImage4,
  // },
  // {
  //   id: 'template5',
  //   boldText: 'Creative Agency, corporate and Personal Temp...',
  //   url: 'cover',
  //   name: 'By Daniel Diya',
  //   rating: 5,
  //   star: '(216)',
  //   // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
  //   img: portfolioImage1,
  // },
  // {
  //   id: 'template6',
  //   boldText: 'Creative Agency, corporate and Personal Temp...',
  //   url: 'cover',
  //   name: 'By Daniel Diya',
  //   rating: 4.5,
  //   star: '(216)',
  //   // color: 'border-[1.2px] border-solid border-cover-color text-cover-color rounded-md',
  //   img: portfolioImage1,
  // },
]

export const PortfolionavBarItems = [
  {
    id: 1,
    name: 'Homepage',
  },
  {
    id: 2,
    name: 'Skills Page',
  },
  {
    id: 3,
    name: 'Projects',
  },
  {
    id: 4,
    name: 'Services',
  },
  {
    id: 5,
    name: 'Contact',
  },
  {
    id: 6,
    name: 'Preview',
  },
]

export const portfolioSetUpArray = [
  {
    id: 1,
    label: 'First Name',
    type: 'text',
    name: 'First_Name',
    placeholder: 'Enter first name',
    value: '',
  },
  {
    id: 2,
    label: 'Last Name',
    type: 'text',
    name: 'Last_Name',
    placeholder: 'Enter last name',
    value: '',
  },
  {
    id: 3,
    label: 'Job Title/Description',
    name: 'Job_Title',
    type: 'text',
    placeholder: 'Enter your professional job title',
    value: '',
  },
  {
    id: 4,
    label: 'Short Description',
    name: 'Short_Description',
    type: 'textarea',
    placeholder: 'Please write short note on what service you offer',
    value: '',
  },
  {
    id: 5,
    label: 'Profession',
    name: 'Profession',
    type: 'text',
    placeholder: 'Enter your professional job title',
    value: '',
  },
  {
    id: 6,
    label: 'User Image',
    name: 'userImage',
    type: 'text',
    placeholder: 'Please add an image of yourself',
    value: '',
  },
]

export const portfolioContactArray = [
  {
    id: 1,
    label: 'Phone Number',
    type: 'text',
    name: 'Phone_Number',
    placeholder: 'Enter Phone Number',
    value: '',
  },
  {
    id: 2,
    label: 'Email Address',
    type: 'text',
    name: 'Email_Address',
    placeholder: 'Enter Email Address',
    value: '',
  },
  {
    id: 3,
    label: 'Social Media Link/facebook',
    name: 'facebook',
    type: 'text',
    placeholder: 'Enter your facebook Link',
    value: '',
  },
  {
    id: 4,
    label: 'Social Media Link/twitter',
    name: 'twitter',
    type: 'text',
    placeholder: 'Enter your twitter Link',
    value: '',
  },
  {
    id: 5,
    label: 'Social Media Link/Instagram',
    name: 'Instagram',
    type: 'text',
    placeholder: 'Enter your Instagram Link',
    value: '',
  },
  {
    id: 6,
    label: 'Whatsapp Number*',
    type: 'text',
    name: 'Whatsapp_Number',
    placeholder: 'Enter Whatsapp Number',
    value: '',
  },
  {
    id: 6,
    label: 'Github Link',
    type: 'text',
    name: 'Github Link',
    placeholder: 'Enter your Github Link',
    value: '',
  },
  {
    id: 7,
    label: 'Other Link',
    name: 'Other_Link',
    type: 'text',
    placeholder: 'Enter any other Link',
    value: '',
  },
]
