import React, { useState, useEffect } from "react";
import { Button, Card, Space, Image } from "antd";
import "../styles/App.css";
import AddArticleForm from "./AddArticleForm";
import { IndexArticles } from "../context/FakeIndexArticle";
import IndexTemplate from "./IndexTemplate";

const App = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [articles, setArticles] = useState(IndexArticles);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <IndexTemplate>
      <div className="index">
        <div className="indexArticleBody">
          <div className="indexArticleButtonFrame">
            <Button type="primary" onClick={showDrawer}>
              写文章
            </Button>
          </div>
          <AddArticleForm visible={isDrawerVisible} onClose={closeDrawer} />
        </div>
      </div>
    </IndexTemplate>
  );
};

export default App;
