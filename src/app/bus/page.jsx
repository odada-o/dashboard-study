"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function BusPage() {
  const [busData, setBusData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBusData = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_BUS_API_KEY
    
    try {
      const response = await axios.get('/api/bus/getRouteAcctoBusLcList', {  // 실제 서비스의 오퍼레이션 ID
        params: {
          serviceKey: decodeURIComponent(API_KEY),  // API 키 디코딩
          pageNo: 1,
          numOfRows: 10,
          _type: 'xml',  // 또는 'json'
          cityCode: '25',  // 예: 대전
          routeId: '보려는 노선ID'
        },
        responseType: 'text'
      })
      // ... 나머지 코드
    } catch (error) {
      console.error('Error:', error)
    }
  }

    fetchBusData()
    
    // 실시간 업데이트를 위한 인터벌 설정 (선택사항)
    const interval = setInterval(fetchBusData, 60000) // 1분마다 업데이트
    
    return () => clearInterval(interval)
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
    </div>
  )

  if (error) return (
    <div className="p-4 text-red-500 text-center">
      {error}
    </div>
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">버스 운행 정보</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {busData.map((bus, index) => (
          <div 
            key={bus.nodeid || index} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{bus.nodenm}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {bus.routenm}번
              </span>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>버스 유형: {bus.routetp}</p>
              <p>차량 번호: {bus.vehicleno}</p>
              <p>정류장 순서: {bus.nodeord}번째</p>
              <p className="text-xs text-gray-500">
                위치: {bus.gpslati}, {bus.gpslong}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}