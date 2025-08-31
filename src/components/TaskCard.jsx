import React from 'react'

export default function TaskCard() {
  return (
    <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-1">
        <h2 className="font-semibold text-lg sm:text-xl">Today's Tasks</h2>
        <span className="text-sm text-gray-500">3/5 completed</span>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {/* Completed tasks */}
        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 line-through bg-gray-50">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs">
            ✓
          </span>
          <span className="truncate">Morning workout</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-400 line-through bg-gray-50">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs">
            ✓
          </span>
          <span className="truncate">Review project proposal</span>
        </div>

        {/* Incomplete tasks */}
        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-700">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
          <span className="truncate">Team meeting at 3 PM</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-700">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
          <span className="truncate">Grocery shopping</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg text-gray-700">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
          <span className="truncate">Call mom</span>
        </div>
      </div>

      {/* Add New Task */}
      <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-2">
        <span className="text-lg">+</span> Add new task
      </button>
    </div>
  )
}
