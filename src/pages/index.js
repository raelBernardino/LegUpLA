import React from "react"
import {
  Nav,
  Landing,
  Mission,
  Volunteer,
  Donate,
  Founders,
  Footer
} from '../components'
import '../index.css'

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <Mission />
      <Volunteer />
      <Donate />
      <Founders />
      <Footer />
    </>
  )
}
