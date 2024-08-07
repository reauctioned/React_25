export default function ScrollToSection() {
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];

  return (
    <div>
      <h1>Scroll to particular section</h1>
      <button>Click to scroll</button>
      {
        data.map(dataItem=> <div style={dataItem.style}>
            <h3>{dataItem.label}</h3>
        </div>)
      }
    </div>
  );
}
