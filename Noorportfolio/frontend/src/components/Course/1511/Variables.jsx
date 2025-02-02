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
        A Variable is a label for a memory location, like naming a container to store flour or eggs. 
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
          slower and uses more memory but is more precise and has a larger range.
        </td>
      </tr>
      <tr>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>FLOAT</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Stores floating-point numbers (decimals) with single precision.
        </td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>32 bits (4 bytes)</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
        float is faster and uses less memory, but it's less precise(will be rounded).
        </td>
      </tr>
      <tr>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>LONG</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          Stores long integers, which have a larger range than the standard `int`.
        </td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>64 bits (8 bytes)</td>
        <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        </td>
      </tr>
    </tbody>
  </table>
</section>



      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>Understanding Variable Syntax</h3>
        <ul>
          <li>
            <pre className="code-snippet"> int my_age;  </pre>
            <span className="code-description"> declare the data type (int) and name it (my_age) - this is a Variable definition. </span>
          </li>
          <li>
            <pre className="code-snippet"> my_age = 19;  </pre>
            <span className="code-description"> assigning a value (19) to the int - this is initialising a variable  </span>
          </li>
          <li>
            <pre className="code-snippet"> my_age = 20;  </pre>
            <span className="code-description"> update the value of the int - this is value assignment </span>
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
        <p>Constants use UPPERCASE naming conventions.</p>
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

    <div className="note-section text-black font-trebuchet">
    <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Printing Variables using printf</h3>
        <ul>
          <li>We can print variables to our terminal using `printf`.</li>
          <li>The format specifier (%) indicates where a value will be inserted in the format string.</li>
          <li>Need to import #include "stdio.h" to use</li>
          <li>Example:
            <pre className="code-snippet">
              int my_age = 13; <br/>
              printf("I am %d years!", my_age);
            </pre>
          </li>
          <li>Format specifiers:
            <ul>
              <li>%c for characters</li>
              <li>%d for integers (decimal integer)</li>
              <li>%lf for doubles (long floating point number)</li>
            </ul>
          </li>
          <li>Example with multiple variables:
            <pre className="code-snippet">
              int diameter = 5; <br/>
              double pi = 3.141; <br/>
              printf("The diameter is %d, pi is %lf", diameter, pi);
            </pre>
          </li>
        </ul>
      </section>
      
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Reading Input with scanf</h3>
        <ul>
          <li>`scanf` reads user input in a formatted way.</li>
          <li>Uses the same format specifiers as `printf`.</li>
          <li>The `&` symbol tells `scanf` where to store the data.</li>
          <li>Need to import #include "stdio.h" to use</li>
          <li>Example:
            <pre className="code-snippet">
              #include &lt;stdio.h&gt; <br/>
              int input; <br/>
              printf("Please enter your age: "); <br/>
              scanf("%d", &input);
            </pre>
          </li>
          <li>Ignoring whitespace in `char` input:
            <pre className="code-snippet">
              scanf(" %c", &character); // Ignores leading whitespace
            </pre>
          </li>
        </ul>
      </section>
      
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Arithmetic Operations</h3>
        <ul>
          <li>Supported operations: `+`, `-`, `*`, `/`.</li>
          <li>Use parentheses `()` to enforce precedence.</li>
          <li>Example:
            <pre className="code-snippet">
              int age = 28; <br/>
              int current_year = 2023; <br/>
              int year_born = current_year - age; <br/>
              printf("You were born in %d", year_born);
            </pre>
          </li>
        </ul>
      </section>
      
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Character Arithmetic</h3>
        <ul>
          <li>Characters in C are treated as integers (ASCII values).</li>
          <li>Example:
            <pre className="code-snippet">
              char letter = 'b'; <br/>
              letter = letter + 1; <br/>
              printf("%c\n", letter); // Prints 'c'
            </pre>
          </li>
        </ul>
      </section>
    </div>

      <div className="navigation-buttons">
      <button onClick={() => navigate("/resources")} className="nav-button">
         Back to Resources
        </button>
        <button onClick={() => navigate("/statements")} className="nav-button">
          Next Topic
        </button>
      </div>
      </div>
  );
};

export default Variables;