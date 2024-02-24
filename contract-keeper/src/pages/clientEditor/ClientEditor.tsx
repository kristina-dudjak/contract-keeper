import "./ClientEditor.css"

export default function ClientEditor() {
  return (
    <div className="editor">
      <h1 className="title">Clients / Edit</h1>
      <div className="divider">
        <form className="form">
          <label>Full name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone</label>
          <input type="number" />
          <a href="">+ add contracts</a>
          <input type="submit" value="Add"></input>
        </form>
        <div className="contractss">
          <button>Click to add a new contract</button>
        </div>
      </div>
    </div>
  )
}
