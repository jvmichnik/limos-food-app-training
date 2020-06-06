CREATE TABLE public.tb_restaurante(
    id_restaurante uuid NOT null,
    nome varchar(200) NOT NULL,
    link_imagem varchar(2000) null,
	  local geometry(POINT,4326)  NOT NULL,
    CONSTRAINT pk_tb_restaurante PRIMARY KEY(id_restaurante)
);