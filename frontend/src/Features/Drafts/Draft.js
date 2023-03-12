import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
//our components
import Add from "./DraftComponents/Add";
import View from "./DraftComponents/View";
//ant part
import { Layout, Menu } from 'antd';
import { PlusCircleOutlined, EyeOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';
const { Header, Content } = Layout;

function Drafts() {
  return (
    <Layout>
      <Router>
        <Header>
          {/* top menu */}
          <Menu
            mode="horizontal"
            theme="dark">
            <Menu.Item key="add">
              <PlusCircleOutlined />
              {/* links to pages */}
              <Link to="add">Add</Link>
            </Menu.Item>
            <Menu.Item key="view">
              <EyeOutlined />
              <Link to="view">View</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          {/* application routing */}
          <BrowserRouter>
            <Route exact path="/user/add" component={Add} />
            <Route exact path="/user/view" component={View} />
             <Route exact path="/user/edit" component={Add} />
             {/* <Route path="/user/dashboard" component={View} />   */}
          </BrowserRouter>
        </Content>
      </Router>
    </Layout>
  );
}

export default Drafts;
