import React from 'react'

type Props = {}

const year = new Date().getFullYear();


const Footer = (props: Props) => {
  return (
    <footer className="max-w-xl mx-auto pb-8 bg-background">
        &copy; Ryan Impey {year}, built with Next
    </footer>
  )
}

export default Footer