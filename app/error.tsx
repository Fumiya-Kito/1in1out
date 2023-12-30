'use client'

import Link from "next/link";

const Error = () => {
  return (
    <div>
      <div className="text-center text-5xl font-bold mb-3">500</div>
      <div className="text-center text-xl font-bold">Server Error</div>
      <div className="text-center"><Link href="/">Back to HomePage</Link></div>
    </div>
  )
}

export default Error;