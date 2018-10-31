/**创建图书商城数据库ts**/
SET NAMES UTF8;
DROP DATABASE IF EXISTS ts;
CREATE DATABASE ts CHARSET=UTF8;
USE ts;


/**图书分类**/
CREATE TABLE ts_book_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(32)
);


/**图书信息**/
CREATE TABLE ts_book(
	bid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	product_id INT,                 #图书编号
	title VARCHAR(128),
	price DECIMAL(7,2),
	auther  VARCHAR(32),
        translator VARCHAR(32),
	details VARCHAR(1024),       #概要
	press VARCHAR(64),           #出版社
	time VARCHAR(32),            #出版时间
	sold_count INT,              #已售出数量
        inventory_quantity INT,      #库存数量
	isOnsale BOOL,               #是否促销中
        isOriginal BOOL,                   #是否原著
        FOREIGN KEY(family_id) REFERENCES ts_book_family(fid)
);


/**图书图片路径**/
CREATE TABLE ts_book_picture(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	book_id INT,
	body VARCHAR(128),           #立体图片路径
	face VARCHAR(128),           #正面图片路径
	back VARCHAR(128),           #背面图片路径
	FOREIGN KEY(book_id) REFERENCES ts_book(bid)
);


/**用户信息**/
CREATE TABLE ts_user(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(32) UNIQUE,    #登录名
	upwd VARCHAR(32),
	email	VARCHAR(64) UNIQUE,
	phone CHAR(11) UNIQUE NOT NULL,
	age INT,               
	
	user_name VARCHAR(32),       #真实姓名 如：杜海洲
	gender INT,									 #性别 1-男 0-女 2-不详
	avatar VARCHAR(128)				   #头像图片路径
);


/**收货地址信息**/
CREATE TABLE ts_reciver_adress(
	aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                 #用户编号
  receiver VARCHAR(16),        #接收人姓名
  province VARCHAR(16),        #省
  city VARCHAR(16),            #市
  county VARCHAR(16),          #县
  address VARCHAR(128),        #详细地址
  cellphone VARCHAR(16),       #手机
 
  postcode CHAR(6),            #邮编
  tag VARCHAR(16),             #标签名

  is_default BOOL,             #是否为当前用户的默认收货地址
	FOREIGN KEY(user_id) REFERENCES ts_user(uid)
);


/**购物车信息**/
CREATE TABLE ts_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,                 #用户编号
  product_id INT,              #商品编号
  count INT,                   #购买数量
  is_checked BOOL              #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE ts_order(
	oid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,                  #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,           #下单时间
  pay_time BIGINT,             #付款时间
  deliver_time BIGINT,         #发货时间
  received_time BIGINT         #签收时间
);

/**订单信息**/
CREATE TABLE ts_order_datails(
	did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,                #订单编号
  product_id INT,              #产品编号
  count INT                    #购买数量
);

/**首页轮播广告**/
CREATE TABLE ts_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);


/**首页商品广告**/
CREATE TABLE ts_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
	



  
