import React, { createContext, useContext } from 'react'

// 생성
const UserContext = createContext();

const User = () => {
  const userData = {
    name: "김철수",
    email: "cheolsu@example.com",
    age: 25,
    location: "서울"
  };

  return (
    // 보급
    <UserContext.Provider value={userData}>
      <h2>사용자 정보</h2>
      <UserProfile />
      <hr />
      <UserProfile />
    </UserContext.Provider>
  )
}

const UserProfile = () => {
  // 사용
  const {name, email, age, location} = useContext(UserContext);
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
  const {age, location} = useContext(UserContext);
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