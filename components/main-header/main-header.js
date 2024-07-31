
import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import NavLinkk from './nav-link'

export default function MainHeader() {
  return (
   <>
   <MainHeaderBackground />
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
      <Image src={logoImg} alt="logo" priority />
      Next level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLinkk href="/meals">Browse Meals</NavLinkk>
            <NavLinkk href="/community">Community</NavLinkk>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </header>
   </>
  )
}
