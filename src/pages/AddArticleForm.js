import React, { useEffect, useState } from "react";
import { IndexArticles } from "../context/FakeIndexArticle";
import {
  Drawer,
  Form,
  Input,
  Row,
  Col,
  Button,
  Space,
  Card,
  Image,
} from "antd";

const ArticleForm = ({ visible, onClose }) => {
  const [articles, setArticles] = useState(IndexArticles);
  const [titleInput, setTitleInput] = useState(""); // 用于存储主旨输入的状态
  const [contentInput, setContentInput] = useState(""); // 用于存储文章输入的状态
  const [imgSrcInput, setImgSrcInput] = useState(""); // 用于存储照片输入的状态

  const handleAddArticle = (e) => {
    e.preventDefault();

    // 如果主旨和文章都有值，将其添加到文章列表中
    if (titleInput.trim() !== "" && contentInput.trim() !== "") {
      setArticles((prevArticles) => [
        ...prevArticles,
        {
          id: prevArticles.length + 1,
          title: titleInput,
          content: contentInput,
          imgSrc: imgSrcInput,
        },
      ]);

      // 清空输入框
      setTitleInput("");
      setContentInput("");
      setImgSrcInput("");
    }
  };

  return (
    <>
      <Drawer
        title="写文章"
        width={720}
        onClose={onClose}
        open={visible}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>回前页</Button>
          </Space>
        }
      >
        <form onSubmit={handleAddArticle}>
          <div>
            <label htmlFor="title" className="form-label">
              标题
            </label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-control"
              onChange={(e) => setTitleInput(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="imgSrc" className="form-label">
              图源
            </label>
            <input
              id="imgSrc"
              type="text"
              name="imgSrc"
              className="form-control"
              onChange={(e) => setImgSrcInput(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="content" className="form-label">
              内容
            </label>
            <input
              id="content"
              type="text"
              name="content"
              className="form-control"
              onChange={(e) => setContentInput(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            确定
          </button>
        </form>
      </Drawer>
      <Space direction="vertical" size={16}>
        {articles.toReversed().map((article, index) => (
          <div key={index} className="indexCardPlacement">
            <Card
              key={article.id} // 使用文章对象的id作为key
              className="indexArticle"
              title={article.title}
              extra={<a href="#">阅读文章...</a>}
            >
              <div className="indexArticleParagraph">
                <div className="indexArticlePreview">
                  <p>{article.content}</p>
                </div>
                <div className="indexArticlePictureFrame">
                  <Image
                    className="indexArticlePicture"
                    src={article.imgSrc}
                    alt="描述"
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Space>
    </>
  );
};

export default ArticleForm;
