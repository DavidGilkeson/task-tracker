const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h2 key={task.key}>
          {task.text} {task.day}
        </h2>
      ))}
    </div>
  );
};

export default Tasks;
