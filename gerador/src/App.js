import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { DesignerTop, Foot, Head, Nav, SpanNone } from "./components/syledAll";
import Cadastro from "./pages/cadastro/cadastrar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";


class App extends React.Component {

  render() {

    return (
       <div>
        <Head>
          <Nav>
            <Link to="/"><DesignerTop>Home</DesignerTop></Link>
            <Link to="/login"><DesignerTop>Login</DesignerTop></Link>
            <Link to="/cadastro"><DesignerTop>Cadastrar</DesignerTop></Link>
          </Nav>
        </Head>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/cadastro' component={Cadastro} />
          </Switch>
        </main>
        <Foot>
          <h3>Todos os direitos reservados &copy;</h3>
        </Foot>
      </div>
    );
  }
}

export default App;
