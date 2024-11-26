import { UserProvider, useUser } from '@/contexts/UserContext';
import React, { createContext, useContext } from 'react'

const User = () => {
  return (
    // 보급
    <UserProvider>
      <h2>사용자 정보</h2>
      <UserProfile />
      <hr />
      <UserProfile />
    </UserProvider>
  )
}

const UserProfile = () => {
  // 사용
  const {name, email, age, location} = useUser();
  return (
    <div>
      <dl>
        <dt>이름</dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>이메일</dt>
        <dd>{email}</dd>
      </dl>
      <UserInfo age={age} location={location} />
    </div>
  )
}

const UserInfo = () => {
  // 사용
  const {age, location} = useUser();
  return (
    <div>
      <dl>
        <dt>나이</dt>
        <dd>{age}</dd>
      </dl>
      <dl>
        <dt>주소</dt>
        <dd>{location}</dd>
      </dl>
    </div>
  )
}

export default User