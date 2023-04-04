//import logo from './logo.svg';
import FormFeedback from './component/FormFeedback';
import './App.css';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];


function App() {
  const item = desserts
     .filter(topDesserts => {
         return topDesserts.calories < 500;
     })
    .sort((a, b) => {
         return a.calories - b.calories;
     })
    .map(topDesserts => {
        const itemText = `${topDesserts.name} - ${topDesserts.calories} kal`;
        return <li>{itemText}</li>
      })
  return (
    <div className="App">
      <ul>{item}</ul>
      <>
      <FormFeedback/>
      </>
      
      
    </div>
  );
}

export default App;
