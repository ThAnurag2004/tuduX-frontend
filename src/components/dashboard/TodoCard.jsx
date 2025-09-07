
function TodoCard() {
  return (
    <div className="border-2 rounded-2xl py-5 px-3 mt-3 w-full flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Title</h1>
        <p>
          This is the sample description. This component is used to demonstrate
          the todos card component.{" "}
        </p>
        <div className="flex mt-3 gap-4 justify-between w-1/2">
          <h2>Due Date</h2>
          <h2>Priority</h2>
          <h2>Category</h2>
        </div>
      </div>
   <div>
        <input type="checkbox" className="font-bold w-6 h-6 accent-amber-700" />
   </div>
    </div>
  );
}

export default TodoCard;
