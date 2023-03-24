<script>
  import { RGBA } from '../template/types/color';
  import { BorderRadius, EdgeInsets } from '../template/types/layout';
  import Column from '../template/widgets/Column.svelte';
  import Container from '../template/widgets/Container.svelte';
import Row from '../template/widgets/Row.svelte';

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<Container 
borderRadius={BorderRadius.all(8)}
width="500px" heightExpandable={true} color={RGBA.only(255,0,0,100)} padding={EdgeInsets.all('10px')}>
    <Row mainAxisAlignment='space-between'>

        <Container heightExpandable={true} >
            <Column mainAxisAlignment='space-between'>
                <Container color="red" width="100px" height="100px"></Container>
                <Container color="green" width="100px" height="100px"></Container>
                <Container color="blue" width="100px" height="100px"></Container>
            </Column>
        </Container>


        <Container color="red" width="100px" height="100px"></Container>
        <Container color="green" width="100px" height="100px"></Container>
        <Container color="blue" width="100px" height="100px"></Container>
    </Row>
</Container>

  