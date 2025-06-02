
export const levels = [
    {
      id: 1,
      type: "react",
      code: `function HelloWorld() {
    return (
      <div classname="box">
        <p>Hello</p>
      </div>
    )
  }`,
      answer: `function HelloWorld() {
    return (
      <div className="box">
        <p>Hello</p>
      </div>
    )
  }`,
      explanation: "React'te 'className' küçük harfle yazılamaz, 'classname' yanlıştır."
    },
  
  {
    id: 2,
    type: 'css',
    code: `body {
  color: #333
  font-size: 16px;
}`,
    answer: `body {
  color: #333;
  font-size: 16px;
}`,
    explanation: 'CSS özellikleri arasında noktalı virgül (;) unutulmamalı.'
    },
    {
        id: 3,
        type: 'jsx',
        code: `// Fix the return statement\nfunction Hello() {\n  return <h1>Hello World</h1>\n}`,
        answer: `// Fix the return statement\nfunction Hello() {\n  return <h1>Hello World</h1>;\n}`,
        explanation: 'Missing semicolon after return.'
      },
      {
        id: 4,
        type: 'js',
        code: `// Fix the if condition\nconst age = 20;\nif age > 18 {\n  console.log("Adult");\n}`,
        answer: `// Fix the if condition\nconst age = 20;\nif (age > 18) {\n  console.log("Adult");\n}`,
        explanation: 'Missing parentheses around condition.'
      },
      {
        id: 5,
        type: 'js',
        code: `// Fix the function call\nconst greet = () => console.log("Hi")\ngreet;`,
        answer: `// Fix the function call\nconst greet = () => console.log("Hi");\ngreet();`,
        explanation: 'Function needs to be called with parentheses.'
      },
      {
        id: 6,
        type: 'js',
        code: `// Fix the loop\nfor (let i = 0; i < 5; i++)\nconsole.log(i)`,
        answer: `// Fix the loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
        explanation: 'Missing braces around loop body.'
      },
      {
        id: 7,
        type: 'js',
        code: `// Fix the object access\nconst user = { name: "Ali" }\nconsole.log(user["name)"]`,
        answer: `// Fix the object access\nconst user = { name: "Ali" };\nconsole.log(user["name"]);`,
        explanation: 'Mismatched quotes in object key.'
      },
      {
        id: 8,
        type: 'react',
        code: `// Fix the component state usage\nfunction Counter() {\n  const [count, setCount] = useState\n  return <button onClick={() => setCount(count + 1)}>+1</button>;\n}`,
        answer: `// Fix the component state usage\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>+1</button>;\n}`,
        explanation: 'useState needs an initial value (e.g., 0).'
      },
      {
        id: 9,
        type: 'jsx',
        code: `// Fix the props usage\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>\n}`,
        answer: `// Fix the props usage\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}`,
        explanation: 'Missing semicolon after JSX.'
      },
      {
        id: 10,
        type: 'css',
        code: `/* Fix the syntax error */\n.button {\n  color: blue\n  padding: 10px;\n}`,
        answer: `/* Fix the syntax error */\n.button {\n  color: blue;\n  padding: 10px;\n}`,
        explanation: 'Missing semicolon after color declaration.'
      },
      {
        id: 11,
        type: 'js',
        code: `// Fix the array access\nconst fruits = ["apple", "banana"]\nconsole.log(fruits.1)`,
        answer: `// Fix the array access\nconst fruits = ["apple", "banana"];\nconsole.log(fruits[1]);`,
        explanation: 'Array indexes must use brackets, not dot notation.'
      },
      {
        id: 12,
        type: 'react',
        code: `// Fix the export\nfunction App() {\n  return <h1>App</h1>;\n}\nexport App;`,
        answer: `// Fix the export\nfunction App() {\n  return <h1>App</h1>;\n}\nexport default App;`,
        explanation: 'Invalid export syntax – should use `export default`.'
      }
      
];