import React from "react";
import { useNavigate } from "react-router-dom";

const IntroToC = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Intro to C Programming</h1>
      <section className="note-section">
        <h3> The only way to learn a new programming language is by writing programs in it.  </h3>
        <h3 style={{ textDecoration: "underline" }}>What is Programming?</h3>
        <p>
          Programming is giving a computer a set of instructions to solve a problem. 
        </p>
        <p> Just like we give cooking instructions like "Mix the flour and eggs," we use 
          languages like C to tell computers what to do step by step.</p>
        <p>
          Computers understand only machine code (binary: 0s and 1s), which is too complex 
          for humans to write directly. 
        </p>
        <p>Imagine baking a cake. You know you need flour and eggs, but you can’t just say, “Hey oven, make me a cake.” You need a detailed recipe with exact measurements and steps. Similarly, we use programming languages to write clear instructions for the computer.
A compiler or interpreter then translates our recipe (code) into something the computer can follow, just like a baker turns ingredients into a cake. 
</p>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
    <h3 style={{ textDecoration: "underline" }}>What is C?</h3>
    <ul>
        <li>C is a statically typed, low-level programming language.</li>
        <li>It is known for its efficiency and direct memory manipulation.</li>
        <li>Unlike Python or Java, C has direct access to memory and hardware.</li>
        <li>Every instruction in C must end with a semicolon (<code>;</code>). If you forget it, the compiler will throw an error.</li>
        <li>C is case-sensitive (<code>word ≠ Word ≠ WORD</code>).</li>
        <li>Comments can be:
            <ul>
                <li>Single-line: <code>// This is a comment</code></li>
                <li>Multi-line: <code>/* This is a multi-line comment */</code></li>
            </ul>
        </li>
        <li>C has built-in libraries that provide useful functions. You import them using <code>#include</code>.</li>
    </ul>
</section>


      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>How Programs Run - Operating System</h3>
        <p>
          Programs run by following instructions processed by the computer’s CPU. The 
          operating system manages resources like memory and processing power, ensuring 
          programs run efficiently.
        </p>
        <p>
          Example: Think of your computer like a busy kitchen:
        </p>
        <ul>
          <p>Programs = different recipes being prepared.</p>
          <p>The OS = the head chef managing tasks and resources.</p>
        </ul>
      </section>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>💻 Terminal Commands to Remember</h3>
        <p> We interact with a computer via a terminal.</p>
        <ul className="terminal-commands">
          <li><code>ls</code> — Lists all files in the current directory.</li>
          <li><code>mkdir foldername</code> — Creates a new directory.</li>
          <li><code>cd foldername</code> — Changes into a directory.</li>
          <li><code>cd ..</code> — Moves up one level.</li>
          <li><code>pwd</code> — Shows the current directory path.</li>
          <li><code>cp source destination</code> — Copies a file.</li>
          <li><code>mv source destination</code> — Moves or renames a file.</li>
          <li><code>rm filename</code> — Deletes a file.</li>
        </ul>
      </section>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>Understanding C Program Structure</h3>
        <ul>
          <li>
            <pre className="code-snippet">#include &lt;stdio.h&gt;</pre>
            <span className="code-description">tells the compiler to include information about the standard input/output library;</span>
          </li>
          <li>
            <pre className="code-snippet">int main(void) {"{ ... }"}</pre>
            <span className="code-description">The starting point of every C program.</span>
          </li>
          <li>
            <pre className="code-snippet">printf("Hello world!");</pre>
            <span className="code-description"> A function is called by naming it, followed by a parenthesised list of arguments, so this calls
            the function printf with the argument "hello, world\n". printf is a library function that
            prints text to the terminal. in this case the string of characters between the quotes. </span>
          </li>
          <li>
            <pre className="code-snippet">return 0;</pre>
            <span className="code-description">Tells the OS that the program ran successfully.</span>
          </li>
        </ul>
      </section>

      <section className="note-section">
        <h3 style={{ textDecoration: "underline" }}>How Do Computers Store Data?</h3>
        <p>
          Computers store data using electricity—either flowing (1) or not (0). These tiny on-off switches are called <b>bits</b>, the smallest unit of data/memory.
        </p>
        <p>
        8 bits = 1 byte. A single bit is like a grain of flour—not very useful on its own. But when we combine bits, we can store letters, numbers, and more—just like combining flour and eggs to make a cake!
        </p>
        <p>
          Example: The letter <b>A</b> in binary is <code>00000</code>, while <b>B</b> is <code>00001</code>.
        </p>
        <h3 style={{ textDecoration: "underline" }}>Types of Memory</h3>
        <ul>
          <p><b>RAM (Random Access Memory):</b> Short-term memory, like ingredients on a counter while baking.</p>
          <p><b>HDD/SSD (Hard Drive/SSD):</b> Long-term storage, like flour stored in a pantry.</p>
        </ul>
        <h3 style={{ textDecoration: "underline" }}>Memory in Programs</h3>
        <p>
          We use <b>variables</b> to store data in memory. Each variable occupies a specific amount of memory based on its data type
        </p>
          <p><strong>Memory Addresses:</strong> Each variable is stored at a unique address in memory.</p>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
         Back to Resources
        </button>
        <button onClick={() => navigate("/variables")} className="nav-button">
          Next Topic - Variables
        </button>
      </div>
    </div>
  );
};

export default IntroToC;
