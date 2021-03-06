SET NAMES UTF8;
DROP DATABASE IF EXISTS bookshop;
CREATE DATABASE bookshop CHARSET=UTF8;
USE bookshop;

#用户表
CREATE TABLE book_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  uemail VARCHAR(64),
  upage VARCHAR(64),
  uage FLOAT(3,0),
  ubirthday DATE,
  upic VARCHAR(64)
);

INSERT INTO book_user VALUES
(NULL,'zq','123456','2388116460@qq.com','','22','1995-02-13','img/tx.jpg'),
(NULL,'naicha','7890','2388116460@qq.com','','21','1995-02-13','img/tx.jpg');
SELECT * FROM book_user;

#书目表
CREATE TABLE book_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(64),
  pname VARCHAR(64),
  pauthor VARCHAR(64),
  pvolume VARCHAR(64),
  price FLOAT(10,2),
  sid INT
);


INSERT INTO book_product VALUES
(NULL,'img/xs1.jpg','极品狂枭','可可','112万',23.00,1),
(NULL,'img/xs2.jpg','道士出山','可可','112万',23.00,1),
(NULL,'img/xs3.jpg','胡罗万丈','可可','112万',44.00,1),
(NULL,'img/xs4.jpg','砂比之爱','可可','222万',233.00,1),
(NULL,'img/xs5.jpg','古墓沉浮','可可','23万',233.00,1),
(NULL,'img/xs6.jpg','森林呓语','可可','156万',253.00,1),
(NULL,'img/xs7.jpg','畅畅质换','可可','57万',26.00,1),
(NULL,'img/xs8.jpg','我要的','可可','89万',23.00,1),
(NULL,'img/xs9.jpg','自己赚','可可','12万',23.00,1),
(NULL,'img/xs10.jpg','好人一生平安','可可','66万',23.00,1),
(NULL,'img/xs11.jpg','来互相伤害呀','可可','44万',23.00,1),
(NULL,'img/xs1.jpg','极品狂枭','可可','112万',23.00,1),
(NULL,'img/xs2.jpg','道士出山','可可','112万',23.00,1),
(NULL,'img/xs3.jpg','胡罗万丈','可可','112万',44.00,1),
(NULL,'img/xs4.jpg','砂比之爱','可可','222万',233.00,1),
(NULL,'img/xs5.jpg','古墓沉浮','可可','23万',233.00,1),
(NULL,'img/xs6.jpg','森林呓语','可可','156万',253.00,3),
(NULL,'img/xs7.jpg','畅畅质换','可可','57万',26.00,4),
(NULL,'img/xs8.jpg','我要的','可可','89万',23.00,5),
(NULL,'img/xs9.jpg','自己赚','可可','12万',23.00,6),
(NULL,'img/xs10.jpg','好人一生平安','可可','66万',23.00,7),
(NULL,'img/xs11.jpg','来互相伤害呀','可可','44万',23.00,1),
(NULL,'img/xs1.jpg','极品狂枭','可可','112万',23.00,1),
(NULL,'img/xs2.jpg','道士出山','可可','112万',23.00,1),
(NULL,'img/xs3.jpg','胡罗万丈','可可','112万',44.00,8),
(NULL,'img/xs4.jpg','砂比之爱','可可','222万',233.00,1),
(NULL,'img/xs5.jpg','古墓沉浮','可可','23万',233.00,1),
(NULL,'img/xs6.jpg','森林呓语','可可','156万',253.00,1),
(NULL,'img/xs7.jpg','畅畅质换','可可','57万',26.00,1),
(NULL,'img/xs8.jpg','我要的','可可','89万',23.00,1),
(NULL,'img/xs9.jpg','自己赚','可可','12万',23.00,1),
(NULL,'img/xs10.jpg','好人一生平安','可可','66万',23.00,1),
(NULL,'img/xs11.jpg','来互相伤害呀','可可','44万',23.00,1),
(NULL,'img/xs1.jpg','极品狂枭','可可','112万',23.00,1),
(NULL,'img/xs2.jpg','道士出山','可可','112万',23.00,3),
(NULL,'img/xs3.jpg','胡罗万丈','可可','112万',44.00,1),
(NULL,'img/xs4.jpg','砂比之爱','可可','222万',233.00,1),
(NULL,'img/xs5.jpg','古墓沉浮','可可','23万',233.00,1),
(NULL,'img/xs6.jpg','森林呓语','可可','156万',253.00,2),
(NULL,'img/xs7.jpg','畅畅质换','可可','57万',26.00,2),
(NULL,'img/xs8.jpg','我要的','可可','89万',23.00,2),
(NULL,'img/xs9.jpg','自己赚','可可','12万',23.00,2),
(NULL,'img/xs10.jpg','好人一生平安','可可','66万',23.00,2),
(NULL,'img/xs11.jpg','来呀，互相伤害呀','可可','44万',23.00,2);
SELECT * FROM book_product;

#小说分类表
CREATE TABLE book_sort(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    sname VARCHAR(64)
);

#插入小说分类
INSERT INTO book_sort VALUES
(NULL,'玄幻'),
(NULL,'言情'),
(NULL,'修仙'),
(NULL,'历史'),
(NULL,'悬疑'),
(NULL,'军事'),
(NULL,'穿越'),
(NULL,'总裁');
SELECT * FROM book_sort;

#小说评论表
CREATE	TABLE book_comment(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(64),
	upic VARCHAR(64),
	cdate DATE,
	uheart INT,
	ureply VARCHAR(64)
);
INSERT INTO book_comment VALUES
(NULL,'zq','img/tx.jpg','2016-09-12','211','哦哟~不错呦，男主蛮帅嘛'),
(NULL,'naicha','img/tx.jpg','2016-11-12','210','女主很可爱，这是什么节奏，霸道总裁吗'),
(NULL,'zq','img/tx.jpg','2006-09-06','190','倒霉爸爸又来找我了'),
(NULL,'zq','img/tx.jpg','2016-09-12','311','回家了，我可不想成为网瘾少年'),
(NULL,'zq','img/tx.jpg','2016-09-12','561','人生不如意不如回家养猪狗，竹林悠闲'),
(NULL,'zq','img/tx.jpg','2016-09-12','541','那个傻吊又来了'),
(NULL,'zq','img/tx.jpg','2016-09-12','531','什么人啊这是'),
(NULL,'zq','img/tx.jpg','2000-06-2','361','我就没见过这种人'),
(NULL,'naicha','img/tx.jpg','2001-03-12','261','我愿变成闲鱼野鹤，可惜看不见天香国色'),
(NULL,'zq','img/tx.jpg','2002-09-12','561','那里的人啊，真美'),
(NULL,'zq','img/tx.jpg','2003-09-12','231','这里温度很低啊'),
(NULL,'zq','img/tx.jpg','2004-09-12','121','又是一个强奸城市的'),
(NULL,'zq','img/tx.jpg','2005-09-12','341','再来，这局不算');
SELECT * FROM book_comment;