import React from "react";
import { motion } from "framer-motion";
import { Plus, Filter, ArrowUpDown, MoreVertical, Calendar, Inbox } from "lucide-react";

export default function TodoPreview() {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden m-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <Inbox className="w-5 h-5" />
          tuduX
        </div>
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition" />
          <ArrowUpDown className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            <Plus className="w-4 h-4" /> Add Task
          </motion.button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 border-r p-4 text-sm bg-gray-50">
          <div className="flex items-center gap-2 mb-3 font-medium cursor-pointer hover:text-gray-900 transition">
            <Calendar className="w-4 h-4" /> Today <span className="ml-auto text-gray-500">3</span>
          </div>
          <div className="flex items-center gap-2 mb-6 font-medium cursor-pointer hover:text-gray-900 transition">
            <Calendar className="w-4 h-4" /> This Week <span className="ml-auto text-gray-500">12</span>
          </div>

          <h3 className="text-xs font-semibold text-gray-500 mb-2">PROJECTS</h3>
          <ul className="space-y-2">
            {["Work", "Personal", "Learning"].map((p, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900"
              >
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span> {p}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Task List */}
        <div className="flex-1 p-4 space-y-3">
          {[
            {
              title: "Review quarterly budget report",
              desc: "Finance team needs feedback by Friday",
              meta: "Due: Mar 15, 2025 • High Priority • Work",
              completed: false,
            },
            {
              title: "Plan weekend hiking trip",
              desc: "Research trails and book accommodation",
              meta: "Due: Mar 20, 2025 • Medium Priority • Personal",
              completed: false,
            },
            {
              title: "Complete React.js course module",
              desc: "Finish chapters 8–10 and submit assignment",
              meta: "Completed: Mar 12, 2025 • Learning",
              completed: true,
            },
          ].map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className={`flex items-start justify-between border rounded-lg p-4 hover:shadow-md transition ${
                task.completed ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div>
                <h4
                  className={`font-semibold ${
                    task.completed ? "line-through text-gray-400" : "text-gray-900"
                  }`}
                >
                  {task.title}
                </h4>
                <p
                  className={`text-sm ${
                    task.completed ? "text-gray-400 line-through" : "text-gray-600"
                  }`}
                >
                  {task.desc}
                </p>
                <div
                  className={`text-xs mt-1 flex gap-3 ${
                    task.completed ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {task.meta.split("•").map((m, j) => (
                    <span key={j}>{m.trim()}</span>
                  ))}
                </div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
