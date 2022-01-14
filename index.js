function Spa() {
  const Route       = ReactRouterDOM.Route;
  const Link        = ReactRouterDOM.Link;
  const HashRouter  = ReactRouterDOM.HashRouter;


  return (
    <HashRouter>
      <div>
          <h1>Routing - Hello World</h1>
          <Link to="/">Home</Link> -- 
          <Link to="/about/">About</Link> -- 
          <Link to="/products">Products</Link>--
          <Link to="/contact">Contact</Link>
          <hr/>
          <Route path="/" exact    component={Home}     />
          <Route path="/about/"    component={About}    />          
          <Route path="/products/" component={Products} />
          <Route path="/contact" component={Contact}  />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
