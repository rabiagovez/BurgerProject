import React from 'react'
import Banner from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${Banner})`}}>
      </div>
      <div className='rightSide'>
      <h1>Bizimle İletişime Geçin</h1>
      <form>
        <label>Ad Soyad</label>
        <input type='text' name='name' placeholder='Lütfen adınızı soyadınızı giriniz...'></input>
        <label>Email</label>
        <input type='email' name='email' placeholder='Lütfen emailinizi giriniz...'></input>
        <label>Mesajınız</label>
        <textarea rows="6"  name='message' placeholder='Lütfen mesajınızı giriniz...'></textarea>
      </form>
      </div>
    </div>
  )
}

export default Contact