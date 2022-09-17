import Link from 'next/link'
import React from 'react'

export default function Navbar() 
{
  return (
    <div style={{ color: "indigo", backgroundColor:"skyblue"  }} className="mx-auto">
      <div className="zoom aii d-flex justify-content-center gap-5 fs-4" >
        <Link href="/">
          <a>Home</a>
        </Link>
            
        <Link href="/exp">
          <a>Exp</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>

        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>

      </div>
      <hr />
    </div>
  );
}

