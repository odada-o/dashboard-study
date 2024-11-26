import React from 'react'

const User = () => {

  const userData = {
    name: "김철수",
    email: "cheolsu@example.com",
    age: 25,
    location: "서울"
  };

  return (
    <div>
      <dl>
        <dt>이름</dt>
        <dd>김철이</dd>
      </dl>
      <dl>
        <dt>이메일</dt>
        <dd>eehd@mail.com</dd>
      </dl>
      <dl>
        <dt>나이</dt>
        <dd>24</dd>
      </dl>
      <dl>
        <dt>주소</dt>
        <dd>서울특별시 서초구</dd>
      </dl>
    </div>
  )
}

export default User