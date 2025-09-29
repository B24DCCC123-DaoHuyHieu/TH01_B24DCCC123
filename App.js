import { useState } from "react";
ưfunction ProductItem({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        width: "250px",
      }}
    >
      <h4>{product.name}</h4>
      <p>Giá: {product.price}đ</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "5px 10px",
          backgroundColor: "white",
          color: "black",
          border: "2px solid #ccc",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
}

function App() {
  
  const [text, setText] = useState("");

  
  const [light, setLight] = useState("red");
  const changeLight = () => {
    setLight((prev) => {
      if (prev === "red") return "green";
      if (prev === "green") return "yellow";
      return "red";
    });
  };

  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  
  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Bài 1: Bộ đếm ký tự</h2>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
        style={{ padding: "5px", width: "300px" }}
      />
      <p>Số ký tự: {text.length}</p>

      <hr />

      
      <h2>Bài 2: Đèn giao thông</h2>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          border: "white",
          display: "inline-block",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: light === "red" ? "red" : "gray",
            margin: "10px auto",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: light === "yellow" ? "yellow" : "gray",
            margin: "10px auto",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: light === "green" ? "green" : "gray",
            margin: "10px auto",
          }}
        ></div>
      </div>
      <br />
      <button onClick={changeLight}>Chuyển đèn</button>

      <hr />

      
      <h2>Bài 3: Danh sách công việc</h2>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "5px", width: "300px" }}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginTop: "5px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <hr />

      
      <h2>Bài 4: Giỏ hàng</h2>
      <p>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </p>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}

      <hr />

      
      <h2>Bài 5: Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
          <p>Mật khẩu: {password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
