'use client'

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="text-center text-5xl font-bold mb-3">404</div>
      <div className="text-center text-xl font-bold">Not Found</div>
      <div className="text-center"><Link href="/">Back to HomePage</Link></div>
    </div>
  )
}

export default NotFound;