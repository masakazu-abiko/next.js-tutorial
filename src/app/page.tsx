"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const bookList = {
  employeeId: "社員番号",
  password: "パスワード",
  login: "ログイン",
};

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // ここでログイン認証処理を行う（仮で成功とする）
    // 認証成功後に遷移
    router.push("/List/bookList");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flex: 1 }}>
        {/* ログイン画面 */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <form
            onSubmit={handleLogin}
            style={{
              width: "300px",
              padding: "2rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "gray" }}>
              {bookList.login}
            </h2>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ color: "gray", display: "block", marginBottom: "5px" }}>
                {bookList.employeeId}
              </label>
              <input
                type="text"
                placeholder="社員番号を入力"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "gray", display: "block", marginBottom: "5px" }}>
                {bookList.password}
              </label>
              <input
                type="password"
                placeholder="パスワードを入力"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {bookList.login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
