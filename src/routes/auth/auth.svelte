<script>
  import Column from "../../widgets/Column.svelte";
  import Container from "../../widgets/Container.svelte";
  import SizedBox from "../../widgets/SizedBox.svelte";
  import Spacer from "../../widgets/Spacer.svelte";

  let email = '';
  let password = '';
    
</script>


<Container height="300px" width="400px">
    <Column>
        <h2>Авторизация</h2>
        <input placeholder="Почта" bind:value={email}/>
        <SizedBox height="10px"></SizedBox>
        <input placeholder="Пароль" bind:value={password}/>
        <Spacer></Spacer>
        <button>Продолжить</button>
    </Column>
</Container>
