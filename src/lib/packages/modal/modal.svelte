<script lang="ts">
  import { fade, scale } from "svelte/transition";
    import { addModal, Modal } from "./modal";

    export let key:string;
    export let props = {};
    let modal = new Modal(key);
    addModal(modal);

    let {isVisible} = modal;
</script>

{#if $isVisible}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" on:click={()=>$isVisible = false} transition:fade>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="content" on:click|stopPropagation={(e)=>e.stopPropagation()} transition:scale>
            <slot></slot>
        </div>
    </div>
{/if}


<style>
    .modal {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.66);
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        padding:12px;
        border-radius: 12px;
        background-color: white;
        width:fit-content;
        height:fit-content;
    }
</style>