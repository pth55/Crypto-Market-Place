import React from 'react';

export default function Card({companyName, courseName, level}) {
    const levels = {
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced"
    }
  return (
    <div className="w-72 max-w-xs bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-1.5 hover:shadow-2xl duration-500 overflow-hidden m-3">
      <a href={`/courses/${JSON.stringify(courseName).replace(' ', '-')}`} className="block">
        <img
          alt="Course Cover Image"
          src="https://www.educative.io/cdn-cgi/image/format=auto,width=350,quality=50/v2api/collection/10370001/6201068373409792/image/4718009354551296" // Placeholder image URL
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col h-40">
          <div className="flex items-center mb-2">
            <img
              className="rounded-full bg-gray-300"
              width="30"
              height="30"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+63c6gz7um0sCr1cSv18aYzLYmonRjtpTB4NP4/Pvu9/PT6eA3pnyFxKoAkFcAlV8AklpruZoAlV4AmmgAmGTi8evl8+4AiUmLx69Yso612ssupHgLnWxBqYHK5dqH3wIXAAAAq0lEQVR4AdzLgwEDQRRF0bu27f67zJuYDeQMv/gDlu24/OL5QYiI63luBMSup1+CpBlXeVGWhXK+3rKqkazxuCrbtquJm9aoemQYubJVLZJJt3QzTOlScXPOtbJ2Gk1xtiDlxm1UVa0h0Gfn1dYapY9VafTghXLSAauelVeBGXSAw4xavDC5DWPv2sblhXLVgpFWbcCbtLil5iLi3X4aTEhMFjMmxJFYQxIAAFFuC1yESb31AAAAAElFTkSuQmCC" // Placeholder image URL
              alt="Educative"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 truncate">{companyName}</span>
          </div>
          <p className="text-lg font-semibold truncate mb-2 text-black">{courseName}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center text-[#da6088]">
              {/* Placeholder for SVG */}
              <svg fill="none" height="10" width="38" viewBox="0 0 38 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4h6v2H9z" fill="currentColor" />
                <path d="M23 4h6v2h-6z" fill="currentColor" />
                <circle cx="5" cy="5" fill={level && level >= 1 ? "currentColor": null} r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="19" cy="5" fill={level && level >= 2 ? "currentColor": null} r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="33" cy="5" fill={level && level >= 3 ? "currentColor": null} r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-sm font-semibold text-gray-700 ml-2">{level && levels[level]}</p>
            </div>
            <button className="flex items-center text-[#da6088] hover:underline">
              <span className="pr-2">Preview</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
