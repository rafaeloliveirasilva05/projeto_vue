<template>
  <div class="topnav">
    <a class="active" href="#home">Home</a>
    <router-link :to="{name: 'Agendar'}">Agendar</router-link>
    <router-link :to="{name: 'Motorista'}">Motoristas</router-link>
    <a href="#clientes">Clientes</a>
    <a href="#mensagens">Mensagens</a>
    <a href="#relatórios">Relatórios</a>
    <a href="#cadastro">Cadastro</a>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
  text-align: rigth;
}
</style>
