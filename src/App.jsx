import './App.css'

const courseTitle = "React Development Lab"

function App() {
  const studentName = "Samar Khammeri"
  
  // Create a student object
  const student = {
    name: "Samar Khammeri",
    age: 20,
    track: "Web Development",
    id: "2024001",
    year: "Sophomore"
  }

  // Define functions
  function sayHello() {
    return "Hello from my React component!";
  }

  function getPersonalizedGreeting() {
    return `Hello, ${studentName}! Welcome to your React lab.`;
  }

  function getAgeMessage() {
    if (student.age >= 18) {
      return `${studentName} is an adult student.`;
    } else {
      return `${studentName} is a minor student.`;
    }
  }

  function formatStudentInfo(name, track) {
    return `${name} is studying ${track}`;
  }

  return (
    <div>
      <h1>Welcome to My First React Component!</h1>
      
      {/* Function calls */}
      <p>{sayHello()}</p>
      <p>{getPersonalizedGreeting()}</p>
      <p>{getAgeMessage()}</p>
      <p>{formatStudentInfo(student.name, student.track)}</p>
      
      {/* Dynamic sentence with template literal */}
      <p>{`Welcome to ${courseTitle}, ${studentName}!`}</p>
      
      {/* Form elements */}
      <form>
        <label htmlFor="studentNameInput">Enter your name:</label>
        <input 
          type="text" 
          id="studentNameInput" 
          placeholder="Type your name here"
          style={{padding: '8px', margin: '10px', borderRadius: '5px'}}
        />
        <button type="submit" style={{padding: '8px 15px', backgroundColor: 'lightblue', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
          Submit
        </button>
      </form>

      {/* Student information displayed from object */}
      <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
        <h3>Student Information:</h3>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Track:</strong> {student.track}</p>
        <p><strong>Student ID:</strong> {student.id}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Status:</strong> {student.age >= 18 ? "Adult student" : "Minor student"}</p>
      </div>

      {/* Display current date as example of function call */}
      <p style={{marginTop: '20px', fontSize: '0.9em', color: 'gray'}}>
        Lab completed on: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default App

/* ============================================
   REFLECTION QUESTIONS - WEEK 2 LAB
   ============================================ */

/*
1. One thing I understand well in this lab:
   I understand how to use curly braces {} to display JavaScript variables, 
   objects, and function calls inside JSX. I also understand that React 
   components must return a single parent element (like the div wrapper), 
   and why we use htmlFor instead of for in labels. The concept of 
   component scope (variables inside vs outside the function) makes sense 
   to me now.
*/

/*
2. One thing that is still confusing:
   I'm still a bit confused about when to use props vs state, but I understand 
   that this lab was just introducing components and we'll learn more about 
   that later. Also, I want to understand more about how to handle form 
   input and actually capture what users type in the input field.
*/

/*
3. One mistake I made and fixed:
   I tried to render the student object directly with {student} and got an 
   error saying objects are not valid React children. I fixed it by accessing 
   individual properties like {student.name} and {student.age}. I also 
   experimented with {sayHello} vs {sayHello()} and learned that the 
   parentheses are needed to actually call the function and get the return value.
*/