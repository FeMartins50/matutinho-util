<script>
    const hsEvents = [
        {
            name: "Espadim Fernando",
            date: "2025-07-04"
        },
        {
            name: "Espadão Stéphanie",
            date: "2025-12-19"
        },
        {
            name: "Espadão Fernando",
            date: "2028-12-08"
        }
    ];
</script>

<main>
    <section class="eventosContainer">
        <h2>Eventos Próximos</h2>

        <div class="carousel">
        {#each hsEvents as event}
            <div class="event">
                <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 8.99999V19L25.6667 22.3333M35.6667 19C35.6667 28.2047 28.2047 35.6667 19 35.6667C9.79525 35.6667 2.33333 28.2047 2.33333 19C2.33333 9.79525 9.79525 2.33333 19 2.33333C28.2047 2.33333 35.6667 9.79525 35.6667 19Z" stroke="#1E1E1E" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h1>{event.date}</h1>

                <h2>{event.name}</h2>
            </div>
        {/each}
        </div>

        <div class="pagination">
            <p>Anterior</p>
            <p>1</p>
            <p>Próximo</p>
        </div>
    </section>
</main>

<style>
    section {
        padding: 0 10vw;
    }
    section:nth-child(odd) {
        background-color: #F1F2F0;
    }
    section:nth-child(even) {
        background-color: #FFFFFF;
    }

    /* Eventos Próximos */
    .eventosContainer {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .eventosContainer h2 {
        margin: 2rem;
        font-size: 1rem;
        font-weight: 400;
    }
    .event {
        background-color: #FFFFFF;
        flex-shrink: 0;
        width: 70vw;
        margin: 0 5vw;
        padding: .4rem;
        border-radius: .5rem;

        display: flex;
        flex-flow: column;
        align-items: center;

    }
    .event svg {
        width: 50px;
        margin: 1.5rem 0;
    }
    .event h1 {
        margin: 0;

        font-size: 1.6rem;
    }
    .event h2 {
        margin: .5rem 0 1rem;

        font-size: .8rem;
        font-weight: 400;
    }
    .carousel {
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
    }
    
</style>