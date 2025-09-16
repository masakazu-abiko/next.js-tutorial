"use client";

import Link from "next/link";

const bookList = {
  sidebarTitle: "MT書籍管理",
  subTitle: "メニュー",
  register: "貸出登録",
  editLoan: "貸出編集",
  bookList: "書籍一覧",
  edit: "編集",
  bookName: "書籍名",
  isbn: "ISBN",
};

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* サイドバーとメインコンテンツ */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* サイドバー */}
        <aside
          style={{
            width: "200px",
            backgroundColor: "#333",
            color: "white",
            padding: "1rem",
            height: "100%",
          }}
        >
           <h1>{bookList.sidebarTitle}</h1>
           <h2>{bookList.subTitle}</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="/rental/add">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "indigo",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                    width: "100%",
                  }}
                >
                  {bookList.register}
                </button>
              </Link>
            </li>
            <li>
              <Link href="/rental/edit">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "indigo",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {bookList.editLoan}
                </button>
              </Link>
            </li>
          </ul>
        </aside>

        {/* メインコンテンツ */}
        <div style={{ flex: 1, padding: "1rem" }}>
          <h1 style={{ color: "gray" }}>{bookList.bookList}</h1>
          <hr style={{ borderColor: "#eee", borderWidth: "1px", margin: "8px 0" }} />
          <div style={{ height: "16px" }}></div>
          <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
              <th>{bookList.edit}</th>
                <th>{bookList.bookName}</th>
                <th>{bookList.isbn}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => alert("編集ボタンがクリックされました")}
                  >
                    ✏️
                  </button>
                </td>
                <td>書籍名をここに記載</td>
                <td>ISBNをここに記載</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}