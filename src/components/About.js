import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.

What is lorem ipsum, and. hen you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.

What is lorem ipsum, and. </p>
      </div>
    </div>
  )
}

export default About