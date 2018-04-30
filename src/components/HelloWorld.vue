<template>
  <div class="row">
    
    <div class="account-settings">
      <div class="input">
        <label align='left' for="firstname">Nome Completo</label>
        <input type="text"/>
      </div>
      <div class="input">
        <label  align='left' for="firstname">CPF</label>
        <input type="text"/>
      </div>
      <div class="input input--wide">
        <label align='left' for="phone">Data Nascimento</label>
        <input type="text"/>
      </div>
    </div>

    <div class="div2" action="">
      <div class="input">
        <label align='left' for="firstname">Cidade</label>
        <input type="text"/>
      </div>
      <div class="input">
        <label  align='left' for="firstname">Modelo do Carro</label>
        <input type="text"/>
      </div>
      <div class="input input--wide">
        <label align='left' for="phone">Placa</label>
        <input type="text"/>
      </div>
    </div>

    <div class="div3">
      <div class="input">
        <label align='left' for="firstname">E-mail</label>
        <input type="text"/>
      </div>
      <div class="input">
        <label  align='left' for="firstname">Habilitação</label>
        <input type="text"/>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

div.account-settings {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 2vw;
}

div.div2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}

div.div3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
}

div {
  border-radius: 5px;
  background-color: #c4e4b1;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
