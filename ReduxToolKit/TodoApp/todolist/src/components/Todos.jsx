import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../todoreducer/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-12">
      {/* Header with Stats */}
      <div className="bg-linear-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl p-8 mb-6">
        <h2 className="text-3xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
          📋 Your Tasks
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-amber-700 rounded-lg p-4 border border-purple-500/20">
            <p className="text-purple-200 text-sm font-semibold">Total</p>
            <p className="text-3xl font-bold text-white">{todos.length}</p>
          </div>
          <div className="bg-slate-400/30 rounded-lg p-4 border border-purple-500/20">
            <p className="text-purple-900 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold bg-linear-to-r from-purple-800 to-emerald-600 bg-clip-text text-transparent">
              {completedCount}
            </p>
          </div>
          <div className="bg-purple-700/30 rounded-lg p-4 border border-purple-500/20">
            <p className="text-sky-900 text-sm font-semibold">Progress</p>
            <p className="text-3xl font-bold text-emerald-800">
              {todos.length > 0
                ? Math.round((completedCount / todos.length) * 100)
                : 0}
              %
            </p>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {todos.length === 0 ? (
        <div className="bg-linear-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl p-16 text-center">
          <p className="text-5xl mb-4">🎯</p>
          <p className="text-slate-800 text-lg font-medium">
            No tasks yet. Add one to get started!
          </p>
        </div>
      ) : (
        /* Todos List */
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group bg-linear-to-r from-slate-700/30 to-slate-600/30 hover:from-slate-800/50 hover:to-slate-700/50 border border-purple-500/20 hover:border-purple-500/40 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 transform hover:translate-x-2 backdrop-blur-sm"
            >
              {/* Checkbox */}
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`shrink-0 w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  todo.completed
                    ? "bg-linear-to-r from-green-400 to-emerald-400 border-green-400 shadow-lg shadow-green-500/30"
                    : "border-purple-400 hover:border-purple-300 hover:bg-purple-800/10"
                }`}
              >
                {todo.completed && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </button>

              {/* Todo Text */}
              <span
                className={`flex-1 text-lg transition-all duration-300 ${
                  todo.completed
                    ? "text-slate-800 line-through"
                    : "text-black group-hover:text-white font-medium"
                }`}
              >
                {todo.text}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="shrink-0 opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-lg p-2 transition-all duration-300 transform hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-red-500/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
