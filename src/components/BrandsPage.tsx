import { useState, useEffect } from 'react';
import Tasks from './Tasks';

const BrandPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'First Task',
      day: 'Feb 6th at 1:30pm',
      reminder: false,
    }
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);
 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((element) => element.id !== id
    ));
  };

  const toggleReminder = (id) => {
    console.log('toggleReminder', id);
    setTasks(tasks.map((element) => 
      element.id === id ? {...element, reminder: !element.reminder} : element
    ));
  };

  return (
    <main className="main-content">
    This is the BRANDS PAGE<br/><br/>
    TASK List:
    {<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>  }
    
    </main>
  )
}

export default BrandPage
