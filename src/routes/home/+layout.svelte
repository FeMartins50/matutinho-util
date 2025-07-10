<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>



<div class="app">
    <Header />

    <slot></slot>

    <Footer />
</div>

<style>
:global(body) {
    margin: 0;
}

.app {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;

    background-color: hsl(0, 0%, 100%);
    
    display: flex;
    flex-flow: column;
}
</style>