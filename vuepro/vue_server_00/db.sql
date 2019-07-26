USE xz;
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));

INSERT INTO xz_login VALUES(null,'jerry',md5('123'));
-- 为商品添加一列
-- #为商品表添加一列
 ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
-- #每一个商品图片 
 UPDATE xz_laptop SET img_url = '01.jpg';
-- 一下代码创建购物车表与添加测试数据
CREATE TABLE xz_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(25),
  price DECIMAL(10,2),
  title VARCHAR(225),
  count INT,
  uid INT
);
INSERT INTO xz_cart VALUES(null,"011.jpg",100,"罗技鼠标",1,1);
INSERT INTO xz_cart VALUES(null,"012.jpg",110,"内存条",1,1);
INSERT INTO xz_cart VALUES(null,"012.jpg",110,"电脑",1,1);
INSERT INTO xz_cart VALUES(null,"011.jpg",110,"手机",1,1);
INSERT INTO xz_cart VALUES(null,"012.jpg",110,"paid",1,1);





