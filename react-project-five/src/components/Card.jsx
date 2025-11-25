const Card = ({ title, name, setName }) => {
  return (
    <div>
      <h2>{title}</h2>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Name inside card: {name}</p>
    </div>
  )
}

export default Card
