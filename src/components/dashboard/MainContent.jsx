import { Funnel } from 'lucide-react';
import TodoCard from "./TodoCard";

function MainContent() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <h1 className='text-2xl font-semibold'>Todos</h1>
            <Funnel />
        </div>
        <div>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
    </div>
  )
}

export default MainContent
