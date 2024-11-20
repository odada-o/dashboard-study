import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsPage = () => {

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=A74f0a1bbeec94f16b815ce82f2c31dc0')
    .then((res) => {return res.json()})
    .then((data) => {
      console.log(data)
    })
    // .catch(() => {})
  }, [])


  return (
    <div>
      <h2>뉴스</h2>
      <ul>
        <li>
          <Link href={"/"}>
            <Image src="" alt="" width={100} height={100} />

            <strong>타이틀</strong>
            <p>뉴스 설명</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NewsPage