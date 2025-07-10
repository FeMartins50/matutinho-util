<header>
    <svg class="container" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 34L36 24L26 14M12 34L22 24L12 14" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <a class="container" href="/" id="mainLogo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.57333 6.57333L12.2267 12.2267M19.7733 19.7733L25.4267 25.4267M25.4267 6.57333L19.7733 12.2267L24.48 7.52M6.57333 25.4267L12.2267 19.7733M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66667 23.3638 2.66667 16C2.66667 8.6362 8.6362 2.66667 16 2.66667C23.3638 2.66667 29.3333 8.6362 29.3333 16ZM21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <p>Matutil</p>
    </a>

    <div class="container" id="profileBox">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 13.3333V6.66667C16.4997 6.3744 16.4225 6.08734 16.2763 5.8343C16.13 5.58126 15.9198 5.37114 15.6667 5.225L9.83333 1.89167C9.57997 1.74539 9.29256 1.66838 9 1.66838C8.70744 1.66838 8.42003 1.74539 8.16667 1.89167L2.33333 5.225C2.08022 5.37114 1.86998 5.58126 1.72372 5.8343C1.57745 6.08734 1.5003 6.3744 1.5 6.66667V13.3333C1.5003 13.6256 1.57745 13.9127 1.72372 14.1657C1.86998 14.4187 2.08022 14.6289 2.33333 14.775L8.16667 18.1083C8.42003 18.2546 8.70744 18.3316 9 18.3316C9.29256 18.3316 9.57997 18.2546 9.83333 18.1083L15.6667 14.775C15.9198 14.6289 16.13 14.4187 16.2763 14.1657C16.4225 13.9127 16.4997 13.6256 16.5 13.3333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <p>Login</p>
    </div>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #D9D9D9;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        font-size: 20px;
        font-family: Inria Sans, sans-serif;
    }

    .container {
        display: flex;
        flex-flow: row;
        align-items: center;
    }

    #mainLogo {
        flex-grow: 1;
        font-size: 30px;
    }
    #mainLogo p {
        padding: 0 10px 0 5px;
    }

    #profileBox p {
        padding: 0 10px 0 5px;
        font-size: 16px;

        justify-self: flex-end;
    }

@media (width >= 30em) or (orientation: landscape) {
    header {
        padding: 0 5vw;
    }
}
</style>