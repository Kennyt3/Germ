'use client'
import React, { useState, useEffect } from 'react'

export default function Register() {
  const [vorname, setVorname] = useState('')
  const [nachname, setNachname] = useState('')
  const [email, setEmail] = useState('')
  const [referrer, setReferrer] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [iban, setIban] = useState('')
  const [superprov, setSuperprov] = useState('')
  const [step, setStep] = useState(1)
  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/workers', {
        method: 'POST',
        body: JSON.stringify({
          vorname,
          nachname,
          email,
          referrer,
          supervisor,
          street,
        }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        alert('User registered')
      }
    } catch (error) {
      console.error('Error:', error.message)
      setErrMsg('Network error occurred')
    }
  }
  return (
    <div class='container'>
      <h2>Worker Registration Form</h2>
      <form id='workerForm' onSubmit={handleClick} method='POST'>
        <ul id='progressbar'>
          <li className={`${step === 1 ? 'active' : ''}`}>Step 1</li>
          <li className={`${step === 2 ? 'active' : ''}`}>Step 2</li>
          <li className={`${step === 3 ? 'active' : ''}`}>Step 3</li>
        </ul>
        {step === 1 && (
          <div className='form-step'>
            {' '}
            <div class='form-group'>
              <label for='firstName'>First Name:</label>
              <input
                required
                type='text'
                name='firstName'
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              />
            </div>
            <div class='form-group'>
              <label for='lastName'>Last Name:</label>
              <input
                required
                type='text'
                name='lastName'
                onChange={(e) => setNachname(e.target.value)}
                value={nachname}
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email:</label>
              <input
                required
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className='but-con1'>
              <button type='button' className='next-button' onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='form-step'>
            {' '}
            <div class='form-group'>
              <label for='referrerId'>Brought by Level 1 (ID):</label>
              <input
                required
                type='text'
                name='referrerId'
                onChange={(e) => setReferrer(e.target.value)}
                value={referrer}
              />
            </div>
            <div class='form-group'>
              <label for='supervisor'>Supervisor:</label>
              <input
                required
                type='text'
                name='supervisor'
                onChange={(e) => setSupervisor(e.target.value)}
                value={supervisor}
              />
            </div>
            <div class='form-group'>
              <label for='superprov'>Superprov:</label>
              <input
                required
                type='text'
                name='superprov'
                onChange={(e) => setSuperprov(e.target.value)}
                value={superprov}
              />
            </div>
            <div className='but-con'>
              <button type='button' onClick={prevStep}>
                Previous
              </button>
              <button type='button' onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className='form-step'>
            {' '}
            <div class='form-group'>
              <label for='iban'>IBAN:</label>
              <input
                required
                type='text'
                name='iban'
                onChange={(e) => setIban(e.target.value)}
                value={iban}
              />
            </div>
            <div class='form-group'>
              <label for='city'>City:</label>
              <input
                required
                type='text'
                name='city'
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div class='form-group'>
              <label for='street'>Street:</label>
              <input
                required
                type='text'
                name='street'
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </div>
            <div className='but-con'>
              <button type='button' onClick={prevStep}>
                Previous
              </button>
              <button type='submit'>Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
