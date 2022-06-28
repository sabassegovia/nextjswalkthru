import React from 'react';
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>in page</h1>
      <Link href='/notes'>
        <a>note</a>
      </Link>
    </div>
  )
}

export default Page;