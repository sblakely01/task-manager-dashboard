import Dashboard from "./components/Dashboard/DashBoard";



function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-900 text-white w-full min-h-screen">
      <h1 className="text-5xl my-10">Task Manager Dashboard</h1>
    
      <Dashboard />

    </div>
  )
}

export default App;