function SupportHero() {
  return (
    <div className= "container mt-2 p-4 text-muted"
    style={{backgroundColor : '#ffffffff'}}>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="fw-bold"
            
            style={{fontFamily : 'arial'}}
         
        >Support Portal</h1>
        <button className="btn btn-primary col-md-2"
        
        style={{width : '10%' , backgroundColor :'#387ED1'}}>My tickets</button>
      </div>

      <div className="position-relative">
        <span
          style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control ps-5 py-3 "
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default SupportHero;
