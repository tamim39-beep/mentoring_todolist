import { useState, useEffect } from "react";
import "./App.css";
import { use } from "react";
import Closing from "./components/closing";
import Input from "./components/input";
import RadioGroup from "./components/radioGroup";
import Button from "./components/button";
import Card from "./components/card";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setTodos([...todos, form]);
    setForm({ title: "", desc: "", status: "To do" });
  };

  return (
    <>
      <Closing text="To do List" />

      <Input
        label="Judul"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Masukan judul..."
      />
      <Input
        label="Deskripsi"
        name="desc"
        type="textarea"
        value={form.desc}
        onChange={handleChange}
        placeholder="Masukan deskripsi."
      />
      <RadioGroup
        label="status"
        name="status"
        options={["To do", "In Progress", "Done"]}
        value={form.status}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Tambah</Button>

      {/* Nampilin si cardnya */}
      <div>
        {todos.map((todo, i) => (
          <Card
            key={i}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
          />
        ))}
      </div>
      <Closing text="Copyright 2025" />
    </>
  );
}

export default App;
