```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation; runs only once after mount
    console.log('Mounted!');
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```