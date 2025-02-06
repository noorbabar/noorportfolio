import React from "react";
import { useNavigate } from "react-router-dom"; 

const Pointers = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Pointers</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">What are Pointers?</h3>
        <p>
           A pointer is a variable that stores the <b>memory address</b> of another variable.
          <br/> Memory is like a large grid where each block has a unique identifier (an address).
          <br/>Instead of storing actual values, pointers store addresses, allowing us to access and modify variables indirectly.
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Pointer Declaration</h3>
        <p>
          To declare a pointer, we use the <code>*</code> symbol:
          <pre className="code-snippet">
            int *pointer;  // Declares a pointer to an integer
            struct student *studentPtr; // Declares a pointer to a struct
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Address-of Operator (&)</h3>
        <p>
          The <code>&</code> operator gives us the address of a variable.
          <pre className="code-snippet">
          <code>
           {` int number = 5;
            int *pointer_to_number = &number;  
            // Stores address of number in pointer `}
         </code>
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Dereferencing (*)</h3>
        <p>
          Dereferencing a pointer means accessing the value at the stored address using <code>*</code>.
          <pre className="code-snippet">
            <code>
        {`int myNumber = 10;
    int *ptr = &myNumber;
            printf("Value at pointer: %d", *ptr);  
            // Outputs 10`}
            </code>
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Common Mistakes</h3>
        <p>
          <b>Incorrect:</b>
          <pre className="code-snippet">
            <code>
        {`int number;
    int *number_ptr;
        number_ptr = number; 1 //  Wrong: Cannot assign an integer to a pointer `}
            </code>
          </pre>
        
          <b>Correct:</b>
          <pre className="code-snippet">
            number_ptr = &number;  //  Correct: Assign the address of number
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Pointers in Functions (Pass by Reference)</h3>
        <p>
          Pointers allow modifying variables inside functions by passing addresses.
          <pre className="code-snippet">
          {`  void doubleValue(int *x) {
              *x = *x * 2;
            }

            int main() {
              int num = 5;
              doubleValue(&num);
              printf("%d", num);  // Outputs 10
            } `}
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Pointers and Arrays</h3>
        <p>
          - Arrays <b>decay</b> into pointers, meaning the array variable points to the first element in memory.
          <br/>- This allows efficient traversal using pointer arithmetic.
          <pre className="code-snippet">
           {` void doubleArray(int data[], int size) {
              for (int i = 0; i < size; i++) {
                data[i] *= 2;
              }
            }

            int main() {
              int arr[5] = {1, 2, 3, 4, 5};
              doubleArray(arr, 5);
            } `}
          </pre>
        </p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

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
          Next Topic - Memory
        </button>
      </div>
    </div>
  );
};

export default Pointers;
