"use client"

import { Provider, useEffect, useState,  } from "react"
import { getProviders, signIn } from "next-auth/react"

type Providers = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
  signinUrlParams: Record<string, string> | null
}

const index = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  if(providers) {
    return (
      <div className="">
        {Object.values(providers).map(
          (provider: Provider, index) => (
            <button className="" key={index}>{provider.id}</button>
          )
        )}
      </div>
    )
  }
}

export default index