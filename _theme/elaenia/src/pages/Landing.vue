<template>
    <main-wrapper :is-loading="isLoading">
        <landing-header/>

        <!-- MAIN -->
        <router-view name="landingIntro"/>
        <router-view name="market"/>
        <router-view name="features"/>
        <router-view name="portfolio"/>
        <router-view name="testimonial"/>
        <router-view name="contact"/>

        <!-- OTHER -->
        <router-view name="pageTitle"/>
        <router-view name="about"/>
        <router-view name="termCondition"/>
        <router-view name="privacyPolicy"/>

        <landing-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from '@app/components/MainWrapper.vue';
    import landingHeader from "@app/components/landing/Header.vue";
    import landingFooter from '@app/components/landing/Footer.vue';
    import app from '@app/App.vue';

    export default {
        extends: app,
        components: { mainWrapper, landingHeader, landingFooter },
    }
</script>