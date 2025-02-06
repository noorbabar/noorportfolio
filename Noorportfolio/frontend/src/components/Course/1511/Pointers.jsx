import React from "react";
import { useNavigate } from "react-router-dom"; 

const Pointers = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Pointers</h1>

      <section className="note-section">
        <h3 className="underline">What are Pointers?</h3>
        <p>
          A pointer is a variable that stores the <b>memory address</b> of another variable.
          Memory is like a large grid where each block has a unique identifier (an address).
          Instead of storing actual values, pointers store addresses, allowing us to access and modify variables indirectly.
        </p>
      </section>

      <section className="note-section">
        <h3 className="underline">Pointer Declaration</h3>
        <p>To declare a pointer, we use the <code>*</code> symbol:</p>
        <pre className="code-snippet">
          <code>
{`int *pointer;  // Declares a pointer to an integer
struct student *studentPtr; // Declares a pointer to a struct`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Address-of Operator (&)</h3>
        <p>The <code>&</code> operator gives us the address of a variable.</p>
        <pre className="code-snippet">
          <code>
{`int number = 5;
int *pointer_to_number = &number;  
// Stores address of number in pointer`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Dereferencing (*)</h3>
        <p>Dereferencing a pointer means accessing the value at the stored address using <code>*</code>.</p>
        <pre className="code-snippet">
          <code>
{`int myNumber = 10;
int *ptr = &myNumber;
printf("Value at pointer: %d", *ptr);  // Outputs 10`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Common Mistakes</h3>
        <p><b>Incorrect:</b></p>
        <pre className="code-snippet">
          <code>
{`int number;
int *number_ptr;
number_ptr = number; // Wrong: Cannot assign an integer to a pointer`}
          </code>
        </pre>
        <p><b>Correct:</b></p>
        <pre className="code-snippet">
          <code>
{`number_ptr = &number;  // Correct: Assign the address of number`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Pointers in Functions (Pass by Reference)</h3>
        <p>Pointers allow modifying variables inside functions by passing addresses.</p>
        <pre className="code-snippet">
          <code>
{`void doubleValue(int *x) {
  *x = *x * 2;
}

int main() {
  int num = 5;
  doubleValue(&num);
  printf("%d", num);  // Outputs 10
}`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Pointers and Arrays</h3>
        <p>
          Arrays <b>decay</b> into pointers, meaning the array variable points to the first element in memory.
          This allows efficient traversal using pointer arithmetic.
        </p>
        <pre className="code-snippet">
          <code>
{`void doubleArray(int data[], int size) {
  for (int i = 0; i < size; i++) {
    data[i] *= 2;
  }
}

int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  doubleArray(arr, 5);
}`}
          </code>
        </pre>
      </section>

      <section className="note-section">
        <h3 className="underline">Example: Pointers in Baking</h3>
        <p>
          Think of a recipe book as memory. Instead of copying the entire book, you bookmark (pointer) the page of the recipe.
          When you need to bake, you go directly to the bookmarked page (dereferencing) instead of flipping through the whole book.
        </p>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/memory")} className="nav-button">
          Next Topic - Dynamic Arrays & Memory
        </button>
      </div>
    </div>
  );
};

export default Pointers;
