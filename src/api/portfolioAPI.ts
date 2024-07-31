/* eslint-disable no-var */
import { collection, getDocs, where, query, doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebasedb'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { servicesAddPagePortfolioSmall } from '../constants'

export const addUser = async (user: any) => {
  const usersRef = collection(db, 'Users')

  await setDoc(doc(usersRef), user)

  localStorage.setItem('user', JSON.stringify(user))
}

export const getUsersPortfolio = async (email: string) => {
  const UsersRef = collection(db, 'Users')

  // Create a query against the collection.
  const q = query(UsersRef)
  const querySnapshot = await getDocs(q)
  var user = null
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().email == email) {
      user = doc.data()
    }
  })
  //   localStorage.setItem("user", JSON.stringify(user))
  return user
}

export const getUsersPortfolioFormDetails = async (email: string) => {
  const PortfolioRef = collection(db, 'portfolio')

  // Create a query against the collection.
  const q = query(PortfolioRef)
  const querySnapshot = await getDocs(q)
  let portfolio = null
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().email == email) {
      portfolio = doc.data()
    }
  })
  //   localStorage.setItem("user", JSON.stringify(user))
  return portfolio
}
export const getUsersPortfolioFormDetailsSlug = async (webTitle: string) => {
  const PortfolioRef = collection(db, 'portfolio')

  // Create a query against the collection.
  const q = query(PortfolioRef)
  const querySnapshot = await getDocs(q)
  var portfolio = null
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().websiteTitle == webTitle) {
      portfolio = doc.data()
    }   
  })
  //   localStorage.setItem("user", JSON.stringify(user))
  return  portfolio
}

export const savePortfolio = async (portfolio: any, email: string) => {
  portfolio.email = email
  portfolio.websiteTitle = JSON.parse(localStorage.getItem('user')!).websiteTitle.toLowerCase()

  const PortfolioRef = collection(db, 'portfolio')

  // Create a query against the collection.
  const q = query(PortfolioRef, where('email', '==', email))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length == 0) {
    await setDoc(doc(PortfolioRef), portfolio)
  } else {
    querySnapshot.forEach(async (docs) => {
      await updateDoc(doc(db, 'portfolio', docs.id), portfolio)
    })
  }
}

export const uploadImageFile = async (path: string, file: any) => {
  const storage = getStorage()
  const storageRef = ref(storage, path)
  let url = ''
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, file).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then((downloadURL) => {
      url = downloadURL
    })
  })
  return url
}
// types
type skillsProps = { name: string; image: string }
type servicesProps = { name: string; image: string }

export const addSearchSkills = async (skill: skillsProps) => {
  const skillRef = collection(db, 'Skills')
  const q = query(skillRef, where('name', '==', skill.name.toLowerCase()))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length == 0) {
    skill.name = skill.name.toLowerCase()
    await setDoc(doc(skillRef), skill)
  }
  console.log('skiiiill', skill)
}

export const addSearchServices = async (service: servicesProps) => {
  const servicesRef = collection(db, 'Services')

  const q = query(servicesRef, where('name', '==', service.name.toLowerCase()))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length == 0) {
    service.name = service.name.toLowerCase()
    await setDoc(doc(servicesRef), service)
  }
}

export const getSearchedSkills = async (setSearchedSkills: any) => {
  const SkillsRef = collection(db, 'Skills')

  // Create a query against the collection.
  const q = query(SkillsRef)
  const querySnapshot = await getDocs(q)
  const skills = <skillsProps[]>[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    skills.push({ name: doc.data().name, image: doc.data().image })
  })
  setSearchedSkills([...skills!])
  //   localStorage.setItem("user", JSON.stringify(user))
  return skills
}
// use
export const getSearchedServices = async (setSearchedServices: any) => {
  const ServicesRef = collection(db, 'Services')

  // Create a query against the collection.
  const q = query(ServicesRef)
  const querySnapshot = await getDocs(q)
  const services = <servicesProps[]>[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    services.push({ name: doc.data().name, image: doc.data().image })
  })
  console.log(services)
  console.log(setSearchedServices([...services!]))
  //   localStorage.setItem("user", JSON.stringify(user))
  return services
}
// getSearchedServices(servicesAddPagePortfolioSmall)

export const checkWebTitle = async (link: string, email: string) => {
  const portfolioRef = collection(db, 'portfolio')
  // run check on present routes
  const check =
    link.toLowerCase() != 'analytics'.toLowerCase() &&
    link != 'setUpPortfolio'.toLowerCase() &&
    link != 'portfolioForm'.toLowerCase() &&
    link != 'portfolio'.toLowerCase() &&
    link != 'resume'.toLowerCase() &&
    link != 'cover'.toLowerCase() &&
    link != ''

  const q = query(
    portfolioRef,
    where('websiteTitle', '==', link.toLowerCase()),
    where('email', '!=', email.toLowerCase()),
  )
  let isValid = true
  const querySnapshot = await getDocs(q)

  if (querySnapshot.docs.length != 0 || check == false) {
    isValid = false
  }
  return isValid
}
