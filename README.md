# mente-sa-api

Challange from gama academy

## Variáveis de Ambiente

To run this project, you will need to add the following environment variables to your .env

`DB_USERNAME`  
`DB_PASSWORD`  
`DB_NAME`  
`DB_DIALECT`  
`DB_PORT`

## Installation

With docker installed on your machine, use the below command to initialize the postgres database and the pgadmin:

```bash
  docker-compose up -d
```

with pgadmin available on port 16543 (if no changes were made), you can enter the "mentesa" database and run the following sql scripts

```bash
    CREATE TABLE Profissional
(
 nome VARCHAR(30) NOT NULL,
 crp INT NOT NULL,
 abordagem VARCHAR(150),
 contato VARCHAR(20) NOT NULL,
 id_profissional SERIAL PRIMARY KEY,
 UNIQUE (crp)
);

CREATE TABLE Pacientes
(
 nome VARCHAR(30) NOT NULL,
 id_paciente SERIAL PRIMARY KEY ,
 email VARCHAR(50) NOT NULL,
 cpf VARCHAR(30) NOT NULL,
 genero VARCHAR(20),
 data_nascimento DATE NOT NULL,
 UNIQUE (email,cpf)
);

CREATE TABLE Sessao
(
 id_sessao SERIAL PRIMARY KEY,
 id_profissional INT,
 id_paciente INT,
 data_agendamento DATE NOT NULL,
 status VARCHAR(20) NOT NULL,
 tema_abordado VARCHAR(20) NOT NULL,
 tipo_de_agendamento VARCHAR(30) NOT NULL,
 duracao TIMESTAMP NOT NULL,
 tipo_sessao VARCHAR(30) NOT NULL
);

CREATE TABLE SessaoPacientes
(
 id_paciente INT,
 id_sessao INT,
 id INT PRIMARY KEY
);

ALTER TABLE Sessao ADD FOREIGN KEY(id_profissional) REFERENCES Profissional (id_profissional);
ALTER TABLE Sessao ADD FOREIGN KEY(id_paciente) REFERENCES Pacientes (id_paciente);
ALTER TABLE SessaoPacientes ADD FOREIGN KEY(id_paciente) REFERENCES Pacientes (id_paciente);
ALTER TABLE SessaoPacientes ADD FOREIGN KEY(id_sessao) REFERENCES Sessao (id_sessao);
```

That way, all tables and relationships are ready to use.

Check in the docker-compose file the user and password to access the database.

After that, use these 2 commands to build and execute the project in server mode.

```bash
  npm run build
  npm run server
```
