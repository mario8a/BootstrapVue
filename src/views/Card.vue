<template>
    <div class="mt-5">
        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>

        <b-row class="mt-5">
            <b-col cols="12" md="4">

                <b-card 
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-top
                        class="mb-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorem ipsum sint qui in, quam architecto illum reprehenderit porro assumenda vel rerum impedit voluptatum perferendis esse quisquam ipsam mollitia expedita.</p>
                    <b-button variant="dark" href="#">Dark</b-button>
                </b-card>

            </b-col>

            <b-col cols="12" md="4">

                <b-card 
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-top
                        class="mb-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorem ipsum sint qui in, quam architecto illum reprehenderit porro assumenda vel rerum impedit voluptatum perferendis esse quisquam ipsam mollitia expedita.</p>
                    <b-button variant="dark" href="#">Dark</b-button>
                </b-card>

            </b-col>

            <b-col cols="12" md="4">

                <b-card 
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-top
                        class="mb-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorem ipsum sint qui in, quam architecto illum reprehenderit porro assumenda vel rerum impedit voluptatum perferendis esse quisquam ipsam mollitia expedita.</p>
                    <b-button variant="dark" href="#">Dark</b-button>
                </b-card>

            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>