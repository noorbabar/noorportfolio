import React from "react";
import { useNavigate } from "react-router-dom"; 

const DiArrays = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 2D Arrays</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Understanding 2D Arrays</h3>
        <p>A 2D array is a collection of elements arranged in rows and columns, similar to a table or spreadsheet.</p>
        
        <h3 className="underline">Why Use 2D Arrays?</h3>
    <ul>
        <li>They help store data in a grid-like format, making it easier to organise complex data (e.g., matrices or tables).</li>
        <li>They enable efficient access to data at specific row and column positions, ideal for applications like image processing or games.</li>
        <li>They allow us to model real-world problems that require multiple dimensions, like seating arrangements or spreadsheets.</li>
    </ul>


    <h3 className="underline">How to Declare a 2D Array</h3>
<ul>
  <li>To declare a 2D array in C, you specify the number of rows and columns. Here's the syntax for declaring and initialising a 2D array:</li>
  <pre>
    <code>
      type arrayName[rows][columns];
    </code>
  </pre>
  <li>Example: <code>int matrix[3][4];</code> (Declares a 2D array with 3 rows and 4 columns of integers)</li>
  <li>Initialising a 2D array at the time of declaration:</li>
  <pre className="code-snippet">
  {` int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
      };`}
  </pre>
  <li>Accessing or modifying elements in a 2D array: <code>matrix[1][2];</code> (Accesses value at row 1, column 2)</li>
  <li>Example of accessing and modifying an element: <code>matrix[2][3] = 15;</code> (Modifies the element at row 2, column 3 to 15)</li>
</ul>

        <h3 className="underline">Visualisation of a 2D Array</h3>
        <p>Imagine a table where rows represent days, and columns represent exercises:</p>
        <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Exercise 1</th>
              <th>Exercise 2</th>
              <th>Exercise 3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>60</td><td>65</td><td>70</td></tr>
            <tr><td>1</td><td>62</td><td>67</td><td>72</td></tr>
            <tr><td>2</td><td>63</td><td>68</td><td>73</td></tr>
            <tr><td>3</td><td>64</td><td>69</td><td>74</td></tr>
            <tr><td>4</td><td>65</td><td>70</td><td>75</td></tr>
            <tr><td>5</td><td>66</td><td>71</td><td>76</td></tr>
            <tr><td>6</td><td>67</td><td>72</td><td>77</td></tr>
          </tbody>
        </table>
        <p>Each value is accessed using row and column indices, e.g., <code>gym_log[2][1]</code> refers to Day 2, Exercise 1.</p>

        <h3 className="underline">Example: Tracking Workout Progress</h3>
        <ul>
          <li>Tracking weights lifted for 3 exercises over a week:</li>
          <pre className="code-snippet">
          {`int gym_log[7][3] = {
    {60, 65, 70}, // Monday
    {62, 67, 72}, // Tuesday
    {63, 68, 73}, // Wednesday
    {64, 69, 74}, // Thursday
    {65, 70, 75}, // Friday
    {66, 71, 76}, // Saturday
    {67, 72, 77}  // Sunday
};`}
          </pre>
          <li>Accessing a value (Wednesday, exercise 2): <code>gym_log[2][1]</code></li>
          <li>Updating Friday, exercise 3: <code>gym_log[4][2] = 80;</code></li>
        </ul>

        <h3 className="underline">Looping Through a 2D Array</h3>
        <p>A nested loop is used to iterate through each row and column:</p>
        <pre className="code-snippet">
        {`for (int i = 0; i < 7; i++) { // Loop through rows (days)
    for (int j = 0; j < 3; j++) { // Loop through columns (exercises)
        printf("%d kg ", gym_log[i][j]);
    }
    printf("\n"); // Move to the next line after each row
}`}
        </pre>
        <p><strong>What Happens in the Loops?</strong></p>
        <ul>
          <li>The outer loop (<code>i</code>) moves through each row (days).</li>
          <li>The inner loop (<code>j</code>) iterates through each exercise for that day.</li>
          <li>It prints all values in a row before moving to the next row.</li>
        </ul>

        <h3 className="underline">Key Takeaways</h3>
        <ul>
          <li>2D arrays are useful for storing structured data like workouts or seating plans.</li>
          <li>Each element is accessed using two indices: row and column.</li>
          <li>Nested loops help iterate over all elements.</li>
        </ul>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/Arguments")} className="nav-button">
          Next Topic - Command Line Arguments
        </button>
      </div>
    </div>
  );
};

export default DiArrays;