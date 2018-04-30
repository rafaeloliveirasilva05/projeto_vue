<template>
  <div>
    <NavBar></NavBar>
  
    <div id="moldura">
      <label for="">Escolha o Motorista</label>
  
      <select v-model="selected" id="appearance-select">
        <option v-for="option in motorista.nomes" v-bind:value="option">{{ option.nome }}</option>
      </select>
  
      <div id="button">
        <button class="button">Agenda</button>
        <button class="button">Corridas Feitas</button>
        <button class="button">Informações</button>
      </div>
    </div>
  
    <div id="moldura">
      <img src="../static/foto-perfil.png">
      <div id="account-settings">
        <div class="input">
          <label align='left' for="firstname">Nome Completo</label>
          <input type="text" v-model="nome_completo" readOnly="true" />
        </div>
        <div class="input">
          <label align='left' for="firstname">CPF</label>
          <input type="text" v-model="cpf" readOnly="true" />
        </div>
        <div class="input input--wide">
          <label align='left' for="phone">Data Nascimento</label>
          <input type="text" v-model="data_nascimento" readOnly="true" />
        </div>
      </div>
  
      <div id="div2" action="">
        <div class="input">
          <label align='left' for="firstname">Cidade</label>
          <input type="text" v-model="cidade" readOnly="true" />
        </div>
        <div class="input">
          <label align='left' for="firstname">Modelo do Carro</label>
          <input type="text" v-model="modelo_carro" readOnly="true" />
        </div>
        <div class="input input--wide">
          <label align='left' for="phone">Placa</label>
          <input type="text" v-model="placa" readOnly="true" />
        </div>
      </div>
  
      <div id="div3">
        <div class="input">
          <label align='left' for="firstname">E-mail</label>
          <input type="text" v-model="email" readOnly="true" />
        </div>
        <div class="input">
          <label align='left'>Habilitação</label>
          <input type="text" v-model="habilitacao" readOnly="true" />
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import NavBar from "./NavBar";
import json from "../arq/motoristas";
export default {
  name: "Motorista",
  data() {
    return {
      nome_completo: "",
      cpf: "",
      data_nascimento: "",
      cidade: "",
      modelo_carro: "",
      placa: "",
      email: "",
      habilitacao: "",
      motorista: json
    };
  },
  components: {
    NavBar
  },
  computed: {
    selected: {
      get() {
        return null;
      },
      set(optionValue) {
        console.log(optionValue);
        this.$store.dispatch("add", optionValue);

        this.nome_completo = this.$store.state.nome_completo;
        this.cpf = this.$store.state.cpf;
        this.data_nascimento = this.$store.state.data_nascimento;
        this.cidade = this.$store.state.cidade;
        this.modelo_carro = this.$store.state.modelo_carro;
        this.placa = this.$store.state.placa;
        this.email = this.$store.state.email;
        this.habilitacao = this.$store.state.habilitacao;
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
}

img {
  width: 200px;
  margin-bottom: 20px;
}

input,
select,
textarea {
  width: 100%;
  padding: 5px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#account-settings {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 2vw;
}

#div2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}

#div3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
}

#moldura {
  border-radius: 5px;
  background-color: #c4e4b1;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

body {
  color: #000000;
  font-family: Sans-Serif;
  padding: 30px;
  background-color: #f6f6f6;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #222222;
}

#appearance-select {
  -webkit-appearance: none;
  /* Remove estilo padrão do Chrome */
  -moz-appearance: none;
  /* Remove estilo padrão do FireFox */
  appearance: none;
  /* Remove estilo padrão do FireFox*/
  background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif)
    no-repeat #eeeeee;
  /* Imagem de fundo (Seta) */
  background-position: 218px center;
  /*Posição da imagem do background*/
  width: 250px;
  /* Tamanho do select, maior que o tamanho da div "div-select" */
  padding: 5px 10px;
  /* Altura do select, importante para que tenha a mesma altura em todo os navegadores */
  border: 1px solid #ddd;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

#button {
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
