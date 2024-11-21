INSERT INTO administrator(name, password, email) VALUES ('Matheus', '12345678', 'matheus@test');
INSERT INTO administrator(name, password, email) VALUES ('Raquel', '12345678', 'raquel@test');

INSERT INTO client(owner_name, company_name, CNPJ, adress) VALUES ('Renato', 'R&R', '1324262524', 'rua linda');
INSERT INTO client(owner_name, company_name, CNPJ, adress) VALUES ('Geraldo', 'mercado SuperStar', '1324262524', 'rua feia');

INSERT INTO products(name, product_type, storage, validity) VALUES ('Trufa Brigadeiro', 'trufa', '59', '25/12');
INSERT INTO products(name, product_type, storage, validity) VALUES ('Trufa Belga', 'trufa', '49', '05/11');
INSERT INTO products(name, product_type, storage, validity) VALUES ('Trufa Ninho', 'trufa', '96', '11/12');

INSERT INTO purchased(day_purchase, client_id, product_id ) VALUES ('19/09', 1, 3);
INSERT INTO purchased(day_purchase, client_id, product_id ) VALUES ('24/09', 2, 1);


