import { Layout } from 'antd';
import { Col, Row } from 'antd';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const { Content } = Layout;

function App() {
  return (
    <Layout className="main-container">
      <Content>
        <Row>
          <Col span={20} offset={2}>
            <div className="contact-main_area">
              <TodoForm />
              <TodoList />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
