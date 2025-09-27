import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Doç. Dr. İlhan Karabıçak
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Genel Cerrahi Uzmanı - Samsun
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <p className="text-gray-700">
            Samsun'da 15+ yıl deneyimli genel cerrahi uzmanı.
            Karaciğer nakli, pankreas cerrahisi, safra kesesi ameliyatı uzmanı.
          </p>
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              VM Medicalpark Samsun Hastanesi
            </p>
            <p className="text-sm text-gray-500">
              Telefon: +90-362-311-1515
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
