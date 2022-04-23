function Blogpage() {
  return (
    <>
    <div className="container">
  {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
  <div className="row">
    <div className="col-md-8">
      
        <div className="card mb-3">
          <img src="https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_1280.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      
      <div className="card mb-3">
          <img src="https://cdn.pixabay.com/photo/2014/08/11/11/50/moon-415501_1280.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      
      <div className="card mb-3">
          <img src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_1280.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      
    </div>
    <div className="col-12 col-md-4">
      
      <div className="card">
        <div className="card-body">
          <h5>A propos de l'auteur</h5>
          <hr/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate amet ullam excepturi odio impedit saepe nemo repellendus, aut suscipit voluptas omnis quas quisquam accusamus illo laboriosam rerum, totam ea eaque.</p>
        </div>
      </div>
       <br/>
      <div className="card">
        <div className="card-body">
          <h5>Les formations</h5>
          <hr/>
          <button type="button" className="btn btn-light">Payantes</button>
          <button type="button" className="btn btn-dark">Gratuites</button>
        </div>
      </div>
      
      <br/>
      <div className="card">
        <div className="card-body">
          <h5>Présentation</h5>
          <hr/>
          <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/ZEyAs3NWH4A" title="YouTube video" allowfullscreen></iframe>
</div>
        </div>
      </div>
      
      
      
      
    </div>
  </div>
  </div>
  </>
  )
}

export default Blogpage