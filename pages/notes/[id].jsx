import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  //{id} matches the file name []:id]
  const { id } = router.query;

  //query params
  if (id === '69') {
    return (
      <div>
        <h1>
          you nasty: {id}
        </h1>

        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>
          In note {id}
        </h1>

        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    )
  }
}

export default Page;