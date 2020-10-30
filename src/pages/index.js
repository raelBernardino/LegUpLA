import React from "react"
import {
  Nav,
  MobileNav,
  Landing,
  Mission,
  Volunteer,
  Donate,
  Founders,
  Footer
} from '../components'
import {  RecoilRoot } from 'recoil'
import '../index.css'

export default function Home() {

  return (
    <>
      <RecoilRoot>
        <Nav />
        <MobileNav />
        <Landing />
        <Mission />
        <Volunteer />
        <Donate />
        <Founders />
        <Footer />
      </RecoilRoot>
    </>
  )
}
