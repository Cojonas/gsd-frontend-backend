import React from 'react';
import PfeifferHeader from "./components/Header"
import PfeifferFooter from "./components/Footer"
import TimelineManager from "./components/TimelineManager"
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const { Header, Footer, Content } = Layout;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers :  {
    "Authorization": "token 01afaed86084b30c47ef041af4b22d51db1eba21"
  }
});

class App extends React.Component {

  render() {

    return (
      <ApolloProvider client={client}>

      <div className="App">
        <Layout>
          <Header>    
            <PfeifferHeader />  
          </Header>
          <Content style={{
              maxWidth: 1024, 
              width:"100%",
              margin: "0 auto", 
              paddingTop: "10px", 
              minHeight: "100vh"
            }}>
              <TimelineManager />
          </Content>
          <Footer style={{background: "#333"}}><PfeifferFooter /></Footer>
        </Layout>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
