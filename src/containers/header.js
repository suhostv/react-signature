import React from 'react';
import '../styles/header.css'

export default function Header() {
  return (
    <div className="header">
      <h4>Signature List</h4>
      <button>
        <a href="https://google.com">
          Create a Signature
        </a>
      </button>
    </div>
  )
}