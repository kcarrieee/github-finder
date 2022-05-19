import React from 'react'

const Footer = () => {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-slate-50 text-primary-content footer-center'>
        <div>Copyright &copy; {footerYear} All rights reserved</div>

    </footer>
  )
}

export default Footer