'use client'
import React, { useState, useEffect } from 'react'

export default function Register() {
  const [vorname, setVorname] = useState('')
  const [nachname, setNachname] = useState('')
  const [email, setEmail] = useState('')
  const [referrer, setReferrer] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [strasse, setStrasse] = useState('')
  const [city, setCity] = useState('')
  const [iban, setIban] = useState('')
  const [superprovBerechtigt, setSuperprovBerechtigt] = useState('')

  const handleClick = () => {}
  return (
    <div class='container'>
      <h2>Worker Registration Form</h2>
      <form id='workerForm' action='#' method='POST'>
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
            // name='city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
