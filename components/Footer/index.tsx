import React from 'react'
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
  return (
    <footer className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-start flex-col">
                <Image src="/logo-purple.svg" width={115} height={38} alt="Flexibble"/>
            </div>
        </div>
    </footer>
  )
}

export default index