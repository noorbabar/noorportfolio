import React from "react";
import { useNavigate } from "react-router-dom"; 

const Variables = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Variables </h1>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>What is a Variable?</h3>
        <p>
        A Variable is a label for a memory location, like naming a container to store flour or eggs. We can change it's value.
        </p>
      </section>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}> To make a variable, you need: </h3>
        <p> 1. It's Data type </p>
        <p> 2. It's name </p>
      </section>

      <section className="note-section">
  <h3 style={{ textDecoration: "underline" }}>💻 A variable stores data of a specific type:</h3>
  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
    <thead>
      <tr style={{ borderBottom: "2px solid #ddd" }}>
        <th style={{ padding: "8px" }}>Data Type</th>
        <th style={{ padding: "8px" }}>Description</th>
        <th style={{ padding: "8px" }}>Size</th>
        <th style={{ padding: "8px" }}>Range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>INT</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Stores whole numbers (no fractions or decimals).
        </td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>32 bits (4 bytes)</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          -2,147,483,648 to 2,147,483,647
        </td>
      </tr>
      <tr>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>CHAR</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Stores a single character wrapped in single quotes (e.g., 'a'). Can be converted to or from an integer (ASCII code).
        </td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>8 bits (1 byte)</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          -128 to 127 (ASCII characters)
        </td>
      </tr>
      <tr>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>DOUBLE</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Stores decimal (floating-point) numbers, suitable for large or small values and fractions.
        </td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>64 bits (8 bytes)</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Very large range (depends on the system)
        </td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>Understanding Variable Syntax</h3>
        <ul>
          <li>
            <pre className="code-snippet">#include &lt;stdio.h&gt;</pre>
            <span className="code-description">Includes the standard input/output library.</span>
          </li>
          <li>
            <pre className="code-snippet">int main(void) {"{ ... }"}</pre>
            <span className="code-description">The starting point of every C program.</span>
          </li>
          <li>
            <pre className="code-snippet"> int my_age;  </pre>
            <span className="code-description"> declare an int (1. data type) named my_age (2. name) - this is a Variable definition. </span>
          </li>
          <li>
            <pre className="code-snippet"> my_age = 19;  </pre>
            <span className="code-description"> assign a value to the int. This is variable initialisation </span>
          </li>
          <li>
            <pre className="code-snippet"> my_age = 20;  </pre>
            <span className="code-description"> update the value of the int. </span>
          </li>
          <li>
            <pre className="code-snippet">return 0;</pre>
            <span className="code-description">Tells the OS that the program ran successfully.</span>
          </li>
        </ul>
      </section>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>Constants</h3>
        <p>Constants are fixed values that cannot be changed after being defined.</p>
        <ul>
          <li>
            <pre className="code-snippet">#define PI 3.1415</pre>
            <span className="code-description">Defines a constant value for PI.</span>
          </li>
          <li>
            <pre className="code-snippet">const int MAX = 100;</pre>
            <span className="code-description">An alternative way to declare constants.</span>
          </li>
          <p>Constants improve efficiency and prevent accidental changes to values.</p>
        </ul>
      </section>
      <div className="navigation-buttons">
      <button onClick={() => navigate("/resources")} className="nav-button">
         Back to Resources
        </button>
        <button onClick={() => navigate("/resources")} className="nav-button">
          Next Topic
        </button>
      </div>
      </div>
  );
};

export default Variables;