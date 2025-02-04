import React from "react";
import { useNavigate } from "react-router-dom"; 

const Strings = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Strings</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Understanding Strings</h3>
        <p>A string is a sequence of characters stored in an array of type <code>char</code>.</p>
        <ul>
          <li>There is no built-in <code>string</code> data type in C (unlike Python or Java).</li>
          <li> Instead, strings are represented as arrays of characters.</li>
          <li> Each string in C must end with a special character called the <strong>null terminator</strong> <code>'\0'</code>, which marks the end of the string.</li>
        </ul>
      </section>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>Declaring and Initialising Strings</h3>
        <p>There are two ways to declare a string in C:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`char word[] = {'h', 'e', 'l', 'l', 'o', '\0'}; // Explicit null terminator
char word[] = "hello"; // Implicit null terminator`}
        </pre>
        <p>Both declarations are equivalent, but the second method is preferred since it automatically adds the <code>'\0'</code> at the end.</p>
      </section>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>Example: Gym Exercise Tracker</h3>
        <p>Let’s say we want to store the name of an exercise:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`char exercise[] = "Push-ups"; 
printf("Today's exercise: %s", exercise);`}
        </pre>
        <p>Here’s what happens in memory:</p>
        <ul>
          <li><code>exercise</code> is an array of characters: <code>{'P u s h - u p s \\0'}</code></li>
          <li>The <code>printf()</code> function prints the entire string.</li>
          <li>The null terminator <code>'\0'</code> tells C when to stop reading the array.</li>
        </ul>
      </section>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>Working with Strings</h3>
        <p>Strings in C can be manipulated using standard functions from <code>string.h</code>.</p>
        <ul>
          <li><code>strlen(str)</code> - Returns the length of a string (excluding <code>'\0'</code>).</li>
          <li><code>strcpy(dest, src)</code> - Copies one string to another.</li>
          <li><code>strcat(dest, src)</code> - Concatenates (joins) two strings.</li>
          <li><code>strcmp(str1, str2)</code> - Compares two strings.</li>
          <li><code>strchr(str, ch)</code> - Finds the first occurrence of a character in a string.</li>
        </ul>
      </section>

    <div className="p-6 max-w-3xl mx-auto">      
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
      <h3> Understanding <code>fgets()</code> and <code>fputs()</code> in C </h3>
        <h3 className="text-xl font-semibold mb-2"> How does <code>fgets()</code> work?</h3>
        <p>The <code>fgets()</code> function reads a string from input and stores it in a buffer.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><code>fgets(destination, max_size, source);</code></li>
        </ul>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Argument</th>
              <th className="border p-2">What it Represents</th>
              <th className="border p-2">Why It's Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2"><code>destination</code></td>
              <td className="border p-2">Character array (string) where input is stored.</td>
              <td className="border p-2">Defines where the input goes.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>max_size</code></td>
              <td className="border p-2">Max number of characters to read.</td>
              <td className="border p-2">Prevents buffer overflow.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>source</code></td>
              <td className="border p-2">Input stream (e.g., stdin).</td>
              <td className="border p-2">Defines the input source.</td>
            </tr>
          </tbody>
        </table>
      </section>
 
      
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3> How does <code>fputs()</code> work?</h3>
        <p>The <code>fputs()</code> function prints a string to an output stream.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><code>fputs(source, destination);</code></li>
        </ul>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Argument</th>
              <th className="border p-2">What it Represents</th>
              <th className="border p-2">Why It's Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2"><code>source</code></td>
              <td className="border p-2">String to be printed.</td>
              <td className="border p-2">Defines what is displayed.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>destination</code></td>
              <td className="border p-2">Output stream (e.g., stdout).</td>
              <td className="border p-2">Defines where output goes.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
  <h3>Reading Strings from User Input</h3>
  <p>To read a string from the user, use <code>fgets()</code> instead of <code>scanf()</code> to avoid buffer overflow issues.</p>
  <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`#include <stdio.h>
#define MAX_LENGTH 50
int main(void) {
    char name[MAX_LENGTH];
    printf("Enter your name: ");
    fgets(name, MAX_LENGTH, stdin);
    printf("Hello, %s", name);
    return 0;
}`}
  </pre>

  <h4>🔍 Line-by-Line Breakdown</h4>
  <ul>
    <li><code>#define MAX_LENGTH 50</code> → Defines a constant for the maximum string length.</li>
    <li><code>char name[MAX_LENGTH];</code> → Declares an array to store the user's name.</li>
    <li><code>printf("Enter your name: ");</code> → Displays a prompt.</li>
    <li><code>fgets(name, MAX_LENGTH, stdin);</code> → Reads user input safely, preventing overflow.</li>
    <li><code>printf("Hello, %s", name);</code> → Prints the stored name.</li>
  </ul>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

  <h4> How does <code>fgets()</code> work in this example?</h4>
  <p>The <code>fgets()</code> function requires three arguments:</p>
  <ul>
    <li><code>fgets(name, MAX_LENGTH, stdin);</code></li>
  </ul>
  <table border="1" cellpadding="5" cellspacing="0">
    <tr>
      <th>Argument</th>
      <th>What it represents</th>
      <th>Why it's needed</th>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>The character array (string)** where the input will be stored.</td>
      <td>Specifies where the user’s input should be stored.</td>
    </tr>
    <tr>
      <td><code>MAX_LENGTH</code></td>
      <td>The maximum number of characters to read.</td>
      <td>Prevents buffer overflow by limiting input size.</td>
    </tr>
    <tr>
      <td><code>stdin</code></td>
      <td>Standard input (keyboard).</td>
      <td>Tells <code>fgets()</code> to read from user input.</td>
    </tr>
  </table>
</section>
</section>


<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
  <h3>Printing Strings</h3>
  <p>To print strings in C, we can use <code>printf()</code> or <code>fputs()</code>.</p>
  <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`char name[] = "Jake";
fputs(name, stdout); // Preferred over printf("%s", name);`}
  </pre>

  <h4>🔍 Line-by-Line Breakdown</h4>
  <ul>
    <li><code>char name[] = "Jake";</code> → Declares a string containing the name.</li>
    <li><code>fputs(name, stdout);</code> → Prints the string without needing to specify formatting.</li>
  </ul>

  <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
  <h4> How does <code>fputs()</code> work in this example?</h4>
  <p>The <code>fputs()</code> function requires two arguments:</p>
  <ul>
    <li><code>fputs(name, stdout);</code></li>
  </ul>
  <table border="1" cellpadding="5" cellspacing="0">
    <tr>
      <th>Argument</th>
      <th>What it represents</th>
      <th>Why it's needed</th>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>The string to be printed.</td>
      <td>Specifies what text should be displayed.</td>
    </tr>
    <tr>
      <td><code>stdout</code></td>
      <td>Standard output (screen).</td>
      <td>Tells <code>fputs()</code> to print to the console.</td>
    </tr>
  </table>
  </section>
</section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/di-arrays")} className="nav-button">
          Next Topic - 2D Arrays
        </button>
      </div>
    </div>
  );
};

export default Strings;
