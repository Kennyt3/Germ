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
  const [superprovBerechtigt, setSuperprovBerechtigt] = useState('')

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
        <div class='form-group'>
          <label for='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            required
          />
        </div>
        <div class='form-group'>
          <label for='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            onChange={(e) => setNachname(e.target.value)}
            value={nachname}
            required
          />
        </div>
        <div class='form-group'>
          <label for='email'>Email:</label>
          <input
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div class='form-group'>
          <label for='referrerId'>Brought by Level 1 (ID):</label>
          <input
            type='text'
            name='referrerId'
            onChange={(e) => setReferrer(e.target.value)}
            value={referrer}
          />
        </div>
        <div class='form-group'>
          <label for='city'>City:</label>
          <input
            type='text'
            name='city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div class='form-group'>
          <label for='street'>Street:</label>
          <input
            type='text'
            name='street'
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
